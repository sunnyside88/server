const mongoose = require ("mongoose")

const userSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        require:true,
        index:true,
    },
    role:{
        type:String,
        default: "Subscriber",
    },
    address:String,
}, {timestamps:true}
);

module.exports = mongoose.model("User",userSchema)