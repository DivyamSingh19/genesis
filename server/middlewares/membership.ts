import { Request,Response,NextFunction } from "express";

export const membershipMiddleware = async (req:Request,res:Response,next:NextFunction) => {
    const memToken = res.header("mem_token")
    if(!memToken){
        return res.status(401).json({
            success:false,
            message:"No membership found"
        })
    }
    try {
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            err:(error as Error).message
        })
    }
}