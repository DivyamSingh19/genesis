import { Request,Response } from "express";
import prisma from "../utils/prisma";
import { createToken,hashPassword,validatePassword, } from "../utils/tokens";
import { userLoginSchema,newUserSchema } from "../validation/auth";
//implement cookies here in login and register
export const registerUser = async(req:Request,res:Response)=> {
    try {
         const validateBody = newUserSchema.safeParse(req.body)
         if(!validateBody.success){
            return res.status(400).json({
                message:"Bad request"
            })
         }
         const {
            username,
            email,
            password
         } = validateBody.data
        const user = await prisma.user.findFirst({where:{email}})
        if(user){
             return res.json({
                success:false,
                message:"User already exists"
            })
        }
        
        const hashedpassword = await hashPassword(password)
        const newUser = await prisma.user.create({
            data:{
                username,
                email,
                password : hashedpassword,
            }
        })
        const token = createToken(newUser.id)
        const metadata = {
            name : username,
            email :email ,
            userId : newUser.id,
            credit : newUser.credit
        }
          res.status(200).json({
            success:true,
            message:"User created successfully",
            token,
            metadata
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:(error as Error).message
        })
    }
}
export const loginUser= async(req:Request,res:Response) =>  {
    try {
        const validateBody = userLoginSchema.safeParse(req.body)
        if(!validateBody.success){
            return res.status(400).json({
                success:false,
                message:"Bad request"
            })
        }
        const{
            email,
            password
        } = validateBody.data
        if(!email || !password){
            return res.json({
                success:false,
                message:"All fields are required"
            })
        }
        const user = await prisma.user.findFirst({where:{email},select:{username:true,id:true,credit:true,password:true}})
        if(!user){
            return res.status(401).json({
                success:false,
                message:"User doesnot exist"
            })
        }
        const checkPassword = await validatePassword(password,user.password)
        if(checkPassword){
            const token = createToken(user.id)
            const metadata = {
                name:user.username,
                email,
                credit : user.credit,
                userId :user.id
            }
             res.status(200).json({
                success:true,
                message:"Login successful",
                token,
                metadata
            })
        }else{
            res.status(401).json({
                success:false,
                message:"Invalid Credentials"
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:(error as Error).message
        })
    }
}
 

export const logoutUser = async (req:Request,res:Response) => {
    try {
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:(error as Error).message
        })
    }
}

export const me = async (req:Request,res:Response) => {
    try {
        // const userId = await req.
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:(error as Error).message
        })
    }
}

 