import { PrismaClient } from "@prisma/client";
import express from "express"
import { Request,Response } from "express";
import "dotenv"
import bcrypt from "bcrypt"
import { User } from "../types";
import { createToken  } from "../utils/tokens";
 
const prisma = new PrismaClient()
 
async function registerUser(req:Request,res:Response) {
    try {
        const {username,email,password} = req.body as User
        if(!username||!email||!password){
            return res.json({
                success:false,
                message:"All fields are required"
            })
        }
        const user = await prisma.user.findFirst({where:{email}})
        if(user){
             return res.json({
                success:false,
                message:"User already exists"
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password,salt)
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
            email ,
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
async function loginUser(req:Request,res:Response) {
    try {
        const {email,password} = req.body as User
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
        const isMatch = await bcrypt.compare(password,user.password)
        if(!user){
            return res.json({
                success:false,
                message:"User does not exist"
            })
        }
        if(isMatch){
            const token = createToken(user.id)
            const metadata = {
                name:user.username,
                email,
                credits : user.credit,
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
export {registerUser,loginUser}
