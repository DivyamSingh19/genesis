import { PrismaClient } from "@prisma/client";
import { Request,Response } from "express";

async function selectModel(req:Request,res:Response) {
    try {
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:(error as Error).message
        })
    }
}

export {selectModel}