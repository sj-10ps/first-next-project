import mongoose from "mongoose";

let isConnected=false;
const connectDB=async()=>{
    if(isConnected){
        console.log("Database already connected")
        return;
    }

try{
    await mongoose.connect(process.env.MONGODB_URI)
    console.log(isConnected=true)
    console.log("DB connected....")
}catch(err){
   console.log(err.message)
}
}


export default connectDB
