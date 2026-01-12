 
import { UserService } from "../services/user.service";
import { MembershipService } from "../services/membership.service";
import { HttpStatus } from "../utils/error";
import prisma from "../utils/prisma";
import { Request,Response } from "express";

export class MembershipController{
 
    private userService:UserService
    private membershipService:MembershipService 
    constructor(){
        this.userService= new UserService
        this.membershipService = new MembershipService
    }

    addMembership = async (req:Request,res:Response) => {
        try {
            const userId = req.userId
        } catch (error) {
            
        }
    }
    renewMembership = async (req:Request,res:Response) => {
        try {
            
        } catch (error) {
            return res.status(HttpStatus.ServerError).json({
                success:false,
                message:"Can't renew membership, internal server error",
                error:(error as Error).message
            })
        }
    }
}