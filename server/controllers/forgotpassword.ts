import prisma from "../utils/prisma";
import { Request,Response } from "express";

//just take email and validate it , send a reset link with a token in the req header
export const forgotPassword = async (req:Request,res:Response) => {
    try {
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Could not send reset link, internal server error"
        })
    }
}

//validate reset link => correct?=> token valid? => check if the password matches the required constraints, if it does => reset password
export const resetPassword = async (req:Request,res:Response) => {
    try {
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Could not reset password, internal server error"
        })
    }
}

