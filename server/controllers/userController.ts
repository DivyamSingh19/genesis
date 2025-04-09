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
        const newUser = await prisma.user.create({
            data:{
                id,
                username,
                email,
                password,
            }
        })
        const token = createToken(id)
        return res.status(200).json({
            success:true,
            message:"User created successfully"
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
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:(error as Error).message
        })
    }
}
export {registerUser,loginUser}
 
// const loginUser = async (req:Request,res:Response) => {
//         try {
//             const {email,password} = req.body as User;
//             const user = await prisma.user.findFirst({(where:email),selec});
//             if(!user){
//                 return res.json({success:false , message:"User doesn't exists"})
//             }
//             const isMatch = await bcrypt.compare(password,user.password);
//             const metadata ={
//                 name,
//                 email,
//                 password
//             }
//             if(isMatch){
//                 const token = createToken(user._id)
//                 res.json({success:true,token})
//             }else{
//                 res.json({success:false,message:'Invalid credentials'})
//             }
            
//         } catch (error) {
//             console.log(error);
//             res.json({success:false,message:error.message})
//         }
// }

 
// const registerUser = async (req,res) => {
//     try {
//         const {name,email,password} = req.body;
          
//         const exists = await userModel.findOne({email});
//         if(exists){
//             return res.json({success:false, message : "User already exists"})
//         }

        
//         if(!validator.isEmail(email)){
//             return res.json({success:false, message:"Please enter a valid email"});
//         }
//         if(password.length<8){
//             return res.json({success:false, message:"Please enter a strong password"});
//         }
         
//         const salt = await bycrypt.genSalt(10)
        
         
//         const hashedPassword = await bycrypt.hash(password,salt)

//         const newUser = new userModel({
//             name,
//             email,
//             password:hashedPassword
//         })
//         const user = await newUser.save()

//         const token = createToken(user._id)

//         res.json({success:true , token})

//     } catch (error) {
//         console.log(error);
//         res.json({success:false,message:error.message})
//     }
// }

// export {loginUser , registerUser }