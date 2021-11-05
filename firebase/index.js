
var admin = require("firebase-admin");

var serviceAccount = require("../config/serviceKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
