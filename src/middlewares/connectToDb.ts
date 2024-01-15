import mongoose from "mongoose"

export const connectToDb = async () =>{
    try{
        const connectObj = await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.nshatai.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
        console.log("[INFO] Connected to Database:- hostname: " +  connectObj.connection.host + " dbName: " + connectObj.connection.name)
    }
    catch(err){
        console.log('[ERROR] Error: ', err)
        process.exit(1)
    }
}