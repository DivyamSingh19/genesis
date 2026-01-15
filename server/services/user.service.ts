import { User } from "@prisma/client";
import prisma from "../utils/prisma";
import { BadrequestError, NotFoundError } from "./error.service";

export class UserService{
    async findUser(email:string) {
        try {
            if(!email){
                throw new BadrequestError("Email not provided")
            }
            const user = await prisma.user.findFirst({where:{email}})
            if(!user){
                throw new NotFoundError ("User not found")
            }
            const data ={
                email:user.email,
                id:user.id,
                username:user.username,
                password:user.password
            }
            return data
        } catch (error) {
            console.log(error)
        }
    }
    async checkUser(email:string) {
        try {
            if(!email){
                throw new BadrequestError("Email not found")
            }
            const user = await prisma.user.findFirst({
                where:{email}
            })
            if(!user){
                throw new NotFoundError("User not found")
            }else{
                return true
            }
        } catch (error) {
            console.log(error)
        }
    }

    async checkCredits(email:string){
        try {
            if(!email){
                throw new BadrequestError("Email Not specified")
            }
            const user = await prisma.user.findFirst({
                where:{email}
            })
            if(!user){
                throw new NotFoundError("User not found")
            }
            const credits = user.credit
            return credits
        } catch (error) {
            console.log(error)
        }
    }
    async findUserById (id:string){
        try {
            if(!id){
                throw new BadrequestError("Id not provided")
            }
            const user = await prisma.user.findFirst({
                where:{id}
            })
            if(!user){
                throw new NotFoundError("User with the specified id not found")
            }
            const userData = {
                email:user.email,
                username:user.username
            }
            return userData
        } catch (error) {
            console.log(error)
        }
    }
}