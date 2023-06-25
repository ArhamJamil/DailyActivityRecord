
import User from "../../model/userSchema";
import dbConnection from "../../db/dbConn";
const jwt = require("jsonwebtoken");


const handler = async (req, res) => {
    if (req.method === "PUT") {

        try {
           let toUpdateData = {
            // name: req.body.name,
            // email: req.body.email,
            password: req.body.pw,
            cpassword: req.body.cpw,
            
           }
            let Userrecord = await User.findByIdAndUpdate(req.query._id, {$set: toUpdateData}, {new:true})
            console.log(Userrecord)
            if (Userrecord) {
                res.status(200).json({ message: Userrecord })

            } else {
                res.status(400).json({ error: "invalid data response from server" })
            }
        } catch (error) {
            res.status(400).json({ error: "internal error" })
        }
    } else {
        res.status(400).json({ error: "THIS METHOD IS NOT ALLOWED" })
    }
}
export default dbConnection(handler)