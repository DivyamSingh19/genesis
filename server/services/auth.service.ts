import prisma from "../utils/prisma";

export class AuthService{
    async sendLink(email:string):Promise<void>{
       
        if(!email){
            throw new Error ("Email not specified");
        }
    }
    async resetPassword(token:string,newPassword:string):Promise<void>{

    }
}