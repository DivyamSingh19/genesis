import express, { NextFunction } from "express";
import { Request, Response } from "express";
import { AuthController } from "../controllers/auth";


const userRouter = express.Router();
const authController = new AuthController

userRouter.post("/register-user",async (req:Request,res:Response,next:NextFunction) => {
    try {
        authController.registerUser(req,res)
    } catch (error) {
        next()
    }
})

export default userRouter;
