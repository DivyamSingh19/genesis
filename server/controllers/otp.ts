import { Request,Response } from "express"
import { UserService } from "../services/user.service"
import redis from "../utils/redis";
import { HttpStatus } from "../utils/error";

export class OTPController{
    private userService:UserService
    constructor(){
        this.userService = new UserService;
    }
    sendOTP = async (req:Request,res:Response) => {
        try {
            const email = req.body()
            if(!email){
                return res.status(HttpStatus.Badrequest).json({
                    success:false,
                    message:"Bad Request email not found"
                })
            }
        } catch (error) {
            console.log(error)
            return res.status(HttpStatus.ServerError).json({
                success:false,
                messaage:(error as Error).message
            })
        }
    }
    validateOTP = async (req:Request,res:Response) => {
        try {
            const {
                email,
                otp
            } = req.body
            if(!email || !otp){
                return res.status(HttpStatus.Badrequest).json({
                    success:false,
                    message:"Bad request"
                })
            }
        } catch (error) {
            console.log(error)
            return res.status(HttpStatus.ServerError).json({
                success:false,
                message:(error as Error).message
            })
        }
    }
}