import User from '../../model/userSchema'
import dbConnection from '../../db/dbConn'
var jwt = require('jsonwebtoken');


const handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            let formData = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.pw,
                cpassword: req.body.cpw,

            })
            let user = await formData.save()

            if (user) {
                let userData = {
                    id: user._id
                }
                var token = jwt.sign( userData , 'JWT_PRIVATE_KEY_ARHAM');
                console.log("success")
                res.status(200).json({ success: "success" , jwtToken: token })

            } else {
                res.status(400).json({ error: "User already Exists with this email" })
            }





        } catch (error) {
            res.status(400).json({ error: "internal error" })


        }
    } else {
        res.status(400).json({ error: "THIS METHOD IS NOT ALLOWED" })
    }
}
export default dbConnection(handler)