import prisma from "../utils/prisma";
import { Request,Response } from "express";

export const getUserHistory = async (req:Request,res:Response) => {
    try {
        
    } catch (error) {
         return res.status(500).json({
            success:false,
            message:"Could not get user history, internal server error",
            err:(error as Error).message
        })
    }
}

export const addChat = async (req:Request,res:Response) => {
    try {
        
    } catch (error) {
         return res.status(500).json({
            success:false,
            message:"Could not add chat, internal server error",
            err:(error as Error).message
        })
    }
}

export const removeChat = async (req:Request,res:Response) => {
    try {
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Could not remove chat, internal server error",
            err:(error as Error).message
        })
    }
}