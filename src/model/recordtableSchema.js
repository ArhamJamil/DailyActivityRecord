import { Timestamp } from "mongodb";
import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const recordSchema = new mongoose.Schema ({
    projectName: {
        type: String,
        required: true
    },
    projectOption: {
        type: String,
        required: true
    },
    repository: {
        type: String,
        required: true
    },
    hoursWorked: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    srNO: {
        type: Number,
        unique: true
    },
    repoBranch: {
        type:String,
        required : true
    }
    
})

export default mongoose.models.USERS_RECORD ||  mongoose.model('USERS_RECORD', recordSchema)  