import recordtableSchema from '../../model/recordtableSchema'
import dbConnection from '../../db/dbConn'



const handler = async (req, res) => {
    if (req.method === "DELETE") {
        try {
            let records = await recordtableSchema.findByIdAndDelete(req.query._id)
            if (records) {
               res.status(200).json({ message: "successfully deleted entry"  })
                
            } else {
                res.status(400).json({ error: "There is no such entry found" })
            }
        } catch (error) {
            res.status(400).json({ error: "internal server error" })
        }
    } else {
        res.status(400).json({ error: "THIS METHOD IS NOT ALLOWED" })
    }
}
export default dbConnection(handler)