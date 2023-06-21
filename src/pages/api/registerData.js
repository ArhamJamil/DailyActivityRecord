import User from '../../model/userSchema'
import dbConnection from '../../db/dbConn'
import { redirect } from 'next/navigation'



const handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            let formData = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                cpassword: req.body.cpassword,
            })
            let user = await formData.save()
            if(user){
                console.log("success")
                res.status(200).json({success:"success"})
            }
        } catch (error) {
            res.status(400).json({ error: "internal error" })


        }
    }else{
        res.status(400).json({error: "THIS METHOD IS NOT ALLOWED"})
    }
}
export default dbConnection(handler)