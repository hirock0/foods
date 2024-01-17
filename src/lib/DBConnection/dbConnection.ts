
import mongoose from "mongoose"
export const ConnectionStr = async()=>{
    try{
       await mongoose.connect(process.env.MONGO_URI!);
       console.log("conneted")
        let connection = mongoose.connection;
        connection.on("connected",()=>{
        console.log("MongoDB is connected")
        })
        connection.on("error",(err)=>{
            console.log("MongoDB connection is faild" + err)
        })
    }catch(error:any){
        console.log("Mongo DB is not connected")
    }
}
