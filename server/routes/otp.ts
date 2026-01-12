import { OTPController } from "../controllers/otp";
import express,{NextFunction, Request,Response} from "express"


const otpRouter = express.Router()
const otpController = new OTPController

otpRouter.post("/send-otp",async (req:Request,res:Response,next:NextFunction) => {
    try {
        otpController.sendOTP(req,res)
    } catch (error) {
        next()
    }
})

otpRouter.post("/validate-otp",async (req:Request,res:Response,next:NextFunction) => {
    try {
        otpController.validateOTP(req,res)
    } catch (error) {
        next()
    }
})


export default otpRouter