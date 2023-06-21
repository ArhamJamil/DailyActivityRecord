import mongoose from "mongoose";
// const mongoose = require('mongoose')

const dbConnection = handler => async (req,res) =>{
        try {
            let abc = await mongoose.connect("mongodb+srv://ArhamJamil:MUHAMMADAJ1290@recordtrackercluster.tsbcess.mongodb.net/");
            if(abc){
                console.log("connection sucess")
                return handler (req,res)
            }
          } catch (error) {
           console.log(error)
          }
}


export default dbConnection