import mongoose from "mongoose";

const mongoUri = process.env.MONGO_URI ;

if(!mongoUri){
    throw new Error("URI not found")
}

export const connectDB = async()=>{
    try {
        await mongoose.connect(mongoUri)
        console.log("Mongo DB connected")
    } catch (error) {
        console.error("Mongodb Connection Error",error)
        process.exit(1);
    }
}