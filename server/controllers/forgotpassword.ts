import { AuthService } from "../services/auth.service";
import prisma from "../utils/prisma";
import { Request,Response } from "express";
import { UserService } from "../services/user.service";
class ForgotPasswordController{
    private authService: AuthService;
    private userService: UserService
    constructor() {
        this.authService = new AuthService;
        this.userService = new UserService
    }
    forgotPassword = async (req:Request,res:Response) => {
        try {

        } catch (error) {
            
        }
    }

    resetPassword= async (req:Request,res:Response) => {
        try {
            
        } catch (error) {
            
        }
    }
}