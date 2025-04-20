 
import express, { NextFunction } from "express"
import { Router , Request , Response } from "express"
import { addMembership,terminateMembership } from "../controllers/membershipControllers"
 
const memberShipRouter= express.Router()


memberShipRouter.post("/add-membership",async(req:Request,res:Response,next:NextFunction)=>{
   try {
    addMembership(req,res)
   } catch (error) {
    next()
   }
})
memberShipRouter.delete('/terminate-membership', async(req:Request,res:Response,next:NextFunction)=>{
    try {
        terminateMembership(req,res) 
    } catch (error) {
        next()
    }
     

});

export default memberShipRouter