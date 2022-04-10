const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const process = require('process');
require("dotenv").config();

const authRoute = require("./routes/auth");

const app = express();

mongoose
  .connect(process.env.MONGO_URI_DATABASE, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONN ERR:", err));

//middlewares
app.use(morgan("dev"));
app.use(express.json({ limit: "2mb" }));
app.use(cors());

fs.readdirSync("./routes").map((r) => {
  app.use("/api", require("./routes/" + r));
});

app.get('/', function (req, res) {
  res.sendFile("/index.html")
})

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
