import recordtableSchema from '../../model/recordtableSchema'
import dbConnection from '../../db/dbConn'
import userSchema from '../../model/userSchema'
var jwt = require('jsonwebtoken');




const handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            // let jwtToken = localStorage.getItem('authToken')
            // let decoded = jwt.verify(jwtToken,  'JWT_PRIVATE_KEY_ARHAM'); 
            console.log(req.body.user_id)
            let formData = new recordtableSchema({
                projectName: req.body.projectName,
                projectOption: req.body.projectOption,
                repository: req.body.repository,
                hoursWorked: req.body.hoursWorked,
                description: req.body.description,
                title: req.body.title,
                date: req.body.date,
                repoBranch: req.body.repoBranch,
                user_id: req.body.user_id
            })
           
            
            let userRecord = await formData.save()
            if(userRecord){
                // console.log("success")
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