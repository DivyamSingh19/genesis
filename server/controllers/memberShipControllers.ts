import { PrismaClient } from "@prisma/client";
import { Request,Response } from "express";



async function addMembership(req:Request,res:Response) {
    try {
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status:false,
            messsage : (error as Error).message
        })
    }
}
async function terminateMembership(req:Request,res:Response) {
    try {
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status:false,
            message : (error as Error).message
        })
    }
}

export {terminateMembership,addMembership}