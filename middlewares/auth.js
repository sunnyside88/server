//const admin = require('../firebase')
var admin = require("firebase-admin");

var serviceAccount = require("../config/serviceKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

exports.authCheck = async (req, res, next) => {
    try {
        console.log(req.headers)
        const firebaseUser = await admin.auth().verifyIdToken(req.headers.usertoken)
        req.user = firebaseUser
        return next()
    } catch (err) {
        console.log(err)
        res.status(401).json({
            err: "You are not authorized or expired token"
        })
    }
};

