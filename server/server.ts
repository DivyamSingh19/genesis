import express from "express"
import { Request,Response } from "express";
import cors from "cors"
import connectCloudinary from "./config/cloudinary";
import userRouter from "./routes/auth";
import dotenv from "dotenv"
import otpRouter from "./routes/otp";

const app = express();
const port =process.env.PORT || 4000
dotenv.config()

//middlewares
app.use(express.json())
const allowedOrigins =['http://localhost:3000'];
app.use(cors(
   { origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
})) 

declare global{
    namespace Express{
        interface Request{
            userId?:string
        }
    }
}
connectCloudinary()

//api
app.use("/api/auth",userRouter)
// app.use("/api/membership",memberShipRouter)
// app.use("/api/prompt",promptRouter)
app.use("/api/otp",otpRouter)

app.get('/',(req:Request,res:Response)=>{
    res.send("API Working")
})
app.listen(port, () => console.log('Server started on port ' + port))
