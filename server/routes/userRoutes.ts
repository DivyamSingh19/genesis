import express, { NextFunction } from "express"
import { Request,Response } from "express"
import { registerUser,loginUser } from "../controllers/userController"

const userRouter = express.Router()


userRouter.post("/register-user", async (req:Request,res:Response,next:NextFunction) => {
    try {
        registerUser(req,res)
    } catch (error) {
        next()
    }
});

userRouter.post("/login-user",async (req:Request,res:Response,next:NextFunction)=>{
    try {
        loginUser(req,res)
    } catch (error) {
        next()
    }
})





export default userRouter;