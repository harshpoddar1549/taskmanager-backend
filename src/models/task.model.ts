import mongoose, { Schema } from "mongoose";

//type statusType = "completed" | "pending"

const taskSchema = new Schema(
    {
        "taskTitle": {
            type: String,
            required: true
        },
        "taskDescription":{
            type: String,
            required: false,
            default: ""
        },
        "status":{
            type: String,
            required: true
        }
    },
    {
        versionKey: false,
    }
)

export default mongoose.model('Task', taskSchema)