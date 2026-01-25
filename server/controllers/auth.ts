import { Request,Response } from "express";
import prisma from "../utils/prisma";
import { createToken,hashPassword, validatePassword } from "../utils/tokens";
import { userLoginSchema,newUserSchema } from "../validation/auth";
import { UserService } from "../services/user.service";
import { HttpStatus } from "../utils/error";

export class AuthController{
    private userService:UserService
    constructor(){
        this.userService = new UserService
    }
    registerUser = async (req:Request,res:Response) => {
        try {
            const validateBody = newUserSchema.safeParse(req.body)
            if(!validateBody.success){
                return res.status(HttpStatus.Badrequest).json({
                    success:false,
                    message:"Validation failed"
                })
            }
            const {
            username,
            email,
            password
         } = validateBody.data
         const user = await this.userService.findUser(email)
         if(user){
            return res.status(HttpStatus.Conflict).json({
                success:false,
                message:"User already exits, kindly login"
            })
         }
         const hashedpassword =await hashPassword(password)
         const newUser = await prisma.user.create({
            data:{
                email:email,
                username:username,
                password:hashedpassword,
            }}
         )
         const token = await createToken(newUser.id)

         
         return res.status(HttpStatus.Success).json({
            success:true,
            message:"User registered successfully",
            data:{
                id:newUser.id,
                email:newUser.email,
                username:newUser.username
            },
            token
         })
        } catch (error) {
            return res.status(HttpStatus.ServerError).json({
                success:false,
                message:(error as Error).message
            })
        }
    }
    loginUser = async (req:Request,res:Response) => {
        try {
            const validateBody = userLoginSchema.safeParse(req.body)
            if(!validateBody.success){
                return res.status(HttpStatus.Badrequest).json({
                    success:false,
                    message:"Bad"
                })
            }
            const {
                email,
                password
            } = validateBody.data
            const user = await this.userService.findUser(email)
            if(!user){
                return res.status(HttpStatus.Notfound).json({
                    success:false,
                    message:"User not found"
                })
            }
            const checkPassword = await validatePassword(password,user.password)
            
        } catch (error) {
            return res.status(HttpStatus.ServerError).json({
                success:false,
                message:(error as Error).message
            })
        }
    }
    me = async (req:Request,res:Response) => {
        try {
            const userId = req.userId
            if(!userId){
                return res.status(HttpStatus.Forbidden).json({
                    success:false,
                    message:"Unauthorized to access"
                })
            }
            const user = await this.userService.findUserById(userId)
            if(!user){
                return res.status(HttpStatus.Notfound).json({
                    success:true,
                    message:"User not found"
                })
            }
            return res.status(HttpStatus.Success).json({
                success:true,
                message:"User data retreived successfully",
                data:{
                    username:user?.username,
                    email:user?.email
                }
            })
        } catch (error) {
            return res.status(HttpStatus.ServerError).json({
                success:false,
                message:(error as Error).message
            })
        }
    }
    logout = async (req:Request, res:Response) => {
        try {
            res.cookie("auth_token","",{
                httpOnly:true,
                sameSite:false,
                secure:true
          })
        } catch (error) {
            return res.status(HttpStatus.ServerError).json({
                success:false,
                message:(error as Error).message
            })
        }
    }
}