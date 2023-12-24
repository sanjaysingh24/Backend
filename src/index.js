
import connectDB from "./db/index.js";
import dotenv from "dotenv";


dotenv.config({
    path:'./env'
});
connectDB();



























// second approach is store the db related code in an separate file and import the file in index.js and excute here
/* Approach 1
import express  from "express";
const app =express();
;(async()=>{
try{  // database is store in seprate contient so we use await async function 
 await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
 app.on("error",(err)=>{
 console.log(err);
 throw err;
 })
 app.listen(process.env.PORT,()=>{
    console.log(`App on listening at ${process.env.PORT}`);
 })
 
}catch(e){
    console.log(e);
    throw e
}

})() 

*/