import { Request,Response } from "express"
import { HttpStatus } from "../utils/error"


export class HistoryController{
    add = async (req:Request,res:Response) => {
        try {
            
        } catch (error) {
            return res.status(HttpStatus.ServerError).json({
                success:false,
                message:"Server error while updating user history",
                error:(error as Error).message
            })
        }        
    }

    retrieveAll = async (req:Request,res:Response) => {
        try {
            const userId = req.userId
            if(!userId){
                return res.status(HttpStatus.Unauthorized).json({
                    success:false,
                    message:"Authentication failed"
                })
            }
            
        } catch (error) {
            console.error(error)
            return res.status(HttpStatus.ServerError).json({
                success:false,
                message:"Server error while fetching user history",
                error:(error as Error).message
            })
        }
    }
    retrieveChat = async (req:Request,res:Response) => {
        try {
            const userId = req.userId
            if(!userId){
                return res.status(HttpStatus.Unauthorized).json({
                    success:false,
                    message:"Authentication failed kindly login again",
                })
            }
            const chatId = req.body
            if(!chatId){
                return res.status(HttpStatus.Badrequest).json({
                    success:false,
                    message:"Chat Id not found"
                })
            }
        } catch (error) {
           console.error(error)
           return res.status(HttpStatus.ServerError).json({
                success:false,
                message:"Server error while retriving chat"
           }) 
        }
    }
}