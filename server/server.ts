import express from "express"
import { Request,Response } from "express";
import cors from "cors"
import connectCloudinary from "./config/cloudinary";
import userRouter from "./routes/auth";
import dotenv from "dotenv"
import memberShipRouter from "./routes/membershipRoute";
import promptRouter from "./routes/inputRoute";
const app = express();
const port =process.env.PORT || 4000
dotenv.config()
 


//middlewares
app.use(express.json())
const allowedOrigins =['http://localhost:3000','http://localhost:3001','http://localhost:3002','http://localhost:3003','http://localhost:3004'];
app.use(cors(
   { origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
})) 

connectCloudinary()

//api
app.use("/api/auth",userRouter)
app.use("/api/membership",memberShipRouter)
app.use("/api/prompt",promptRouter)
 

app.get('/',(req:Request,res:Response)=>{
    res.send("API Working")
})
app.listen(port, () => console.log('Server started on PORT ' + port))
