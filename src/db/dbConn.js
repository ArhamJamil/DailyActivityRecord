import mongoose from "mongoose";
// const mongoose = require('mongoose')

const dbConnection = handler => async (req,res) =>{
        try {
            let abc = await mongoose.connect(process.env.MONGODB_URI);
            if(abc){
                // console.log("connection sucess")
                return handler (req,res)
            }
          } catch (error) {
           console.log(error)
          }
}


export default dbConnection
