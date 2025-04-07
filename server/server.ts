import express from "express"
import { Request,Response } from "express";
import cors from "cors"
import connectCloudinary from "./config/cloudinary";
const app = express();
const port =process.env.PORT || 4000
 
 


//middlewares
app.use(express.json())
app.use(cors()) 

connectCloudinary()
 
 

app.get('/',(req:Request,res:Response)=>{
    res.send("API Working")
})
app.listen(port, () => console.log('Server started on PORT ' + port))
