import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
    try{
      const connectionInstance =  await mongoose.connect(`mongodb+srv://Sanjay:sanju@cluster0.wmhsmwh.mongodb.net/${DB_NAME}`);
      console.log(`\n Mongodb connected !! DB HOST:${connectionInstance.connection.host}`)
    }catch(err){
        console.log("mongodb connection error: " , err);
     
       
    }
}
export default connectDB;