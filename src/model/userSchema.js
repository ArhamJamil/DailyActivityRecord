import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        cpassword: {
            type: String,
            required: true
        },
        
    }
)



export default mongoose.models.USERS_TEST ||  mongoose.model('USERS_TEST', userSchema)  
// 