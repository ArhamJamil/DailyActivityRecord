import recordtableSchema from '../../model/recordtableSchema'
import dbConnection from '../../db/dbConn'



const handler = async (req, res) => {
    if (req.method === "PUT") {

        try {
           let toUpdateData = {
           
            projectName : req.body.projectName,
            projectOption : req.body.projectOption,
            repository : req.body.repository,
            hoursWorked : req.body.hoursWorked,
            description : req.body.description,
            title : req.body.title,
            repoBranch : req.body.repoBranch,
            date : req.body.date,
            
           }
            let records = await recordtableSchema.findByIdAndUpdate(req.query._id, {$set: toUpdateData}, {new:true})
            if (records) {
                res.status(200).json({ message: records })

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