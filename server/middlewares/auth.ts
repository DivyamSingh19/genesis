import { Request,Response, NextFunction } from "express";


type UserPayload = {

}

export const authMiddleware = async (req:Request,res:Response,next:NextFunction) => {
    const token = req.cookies.an_token
    if(!token){
        return res.status(401).json({
            success:false,
            message:"Not authenticated to access"
        })
    }
    try {
        
    } catch (error) {
        return res.json({
            success:false,
            err:(error as Error).message
        })
    }
}
