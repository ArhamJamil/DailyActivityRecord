import User from '../../model/userSchema'
import dbConnection from '../../db/dbConn'

const handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            let loginCred = await User.findOne({ email: req.body.email })
            if (loginCred) {
                // console.log(req.body)
                // console.log(loginCred)
                if (
                    req.body.email == loginCred.email && req.body.password == loginCred.password) {

                    res.status(200).json({ message: "success login" })
                } else {
                    res.status(400).json({ error: "Credentials not valid" })
                }
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