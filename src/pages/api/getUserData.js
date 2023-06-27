import User from '../../model/userSchema'
import dbConnection from '../../db/dbConn'

const handler = async (req, res) => {
    if (req.method === "GET") {
        try {
            let userData = await User.findById(req.query._id)
            if(userData){
                res.status(200).json({data: userData})
            }else{
                res.status(400).json({error:"invalid response"})
            }


        } catch (error) {
            res.status(400).json({ error: "Credentials not valid" })
        }
    } else {
        res.status(400).json({ error: "THIS METHOD IS NOT ALLOWED" })
    }
}
export default dbConnection(handler)