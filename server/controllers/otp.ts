import { Request,Response } from "express"
import redis from "../utils/redis"
export const sendOTP = async (req:Request,res:Response) => {
    try {
        const {email} = req.body
        if(!email){
            return res.status(400).json({
                success:false,
                message:"Bad request, email not found"
            })
        }
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            err:(error as Error).message
        })
    }
}

export const validateOTP = async (req:Request,res:Response) => {
    try {
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            err:(error as Error).message
        })
    }
}