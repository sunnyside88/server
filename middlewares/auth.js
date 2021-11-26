const admin = require('../firebase')

exports.authCheck = async (req, res, next) => {
    try {
        const firebaseUser = admin.auth().verifyIdToken(req.headers.userToken)
        req.user = firebaseUser
        next()
    } catch (err) {
        res.status(401).json({
            err: "Invalid or expired token"
        })
    }
};
