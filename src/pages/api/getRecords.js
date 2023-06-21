import recordtableSchema from '../../model/recordtableSchema'
import dbConnection from '../../db/dbConn'
import { redirect } from 'next/navigation'



const handler = async (req, res) => {
    if (req.method === "GET") {
        try {
            let records = await recordtableSchema.find()
            if (records) {
               res.status(200).json({ allRecords: records  })
                
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