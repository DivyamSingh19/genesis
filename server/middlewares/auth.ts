import { Request,Response, NextFunction } from "express";


export const authMiddleware = async (req:Request,res:Response,next:NextFunction) => {
    const token = req.cookies.auth_token
    if(!token){
        return res.status(401).json({
            success:false,
            message:"Not authenticated to access"
        })
    }
    

    const userId = req.userId
    try {
        
    } catch (error) {
        return res.json({
            success:false,
            err:(error as Error).message
        })
    }
}
