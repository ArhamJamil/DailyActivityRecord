import User from '../../model/userSchema'
import dbConnection from '../../db/dbConn'
const handler = async (req, res) =>{
  let users = await User.find()
  res.status(200).json({users})
}
export default dbConnection(handler)