import User from '../../model/userSchema'
import dbConnection from '../../db/dbConn'
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            let loginCred = await User.findOne({ email: req.body.email })
            let dcpw = CryptoJS.AES.decrypt(loginCred.password, 'ArhamCryptoSecretKEY').toString(CryptoJS.enc.Utf8)
            if (loginCred) {
                // console.log(req.body)
                // console.log(loginCred)
                if (
                    req.body.email == loginCred.email && req.body.password == dcpw) {
                    let userData = {
                        id: loginCred._id
                    }
                    // console.log(userData.id)
                    var token = jwt.sign( userData , 'JWT_PRIVATE_KEY_ARHAM');
                    res.status(200).json({ message: "success login", jwtToken: token })
                } else {
                    res.status(400).json({ error: "Credentials not valid" })
                }
            } else {
                res.status(400).json({ error: "invalid data response from server" })
            }
        } catch (error) {
            res.status(400).json({ error: "Credentials not valid" })
        }
    } else {
        res.status(400).json({ error: "THIS METHOD IS NOT ALLOWED" })
    }
}
export default dbConnection(handler)