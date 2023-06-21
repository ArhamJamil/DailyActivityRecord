import recordtableSchema from '../../model/recordtableSchema'
import dbConnection from '../../db/dbConn'




const handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            let formData = new recordtableSchema({
                projectName: req.body.projectName,
                projectOption: req.body.projectOption,
                repository: req.body.repository,
                hoursWorked: req.body.hoursWorked,
                description: req.body.description,
                title: req.body.title,
                date: req.body.date,
                repoBranch: req.body.repoBranch
            })
            let userRecord = await formData.save()
            if(userRecord){
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