import prisma from "../utils/prisma";
import { ServerError } from "./error.service";
export class ChatService{
    async getChats(userId:string) {
        try {
            
        } catch (error) {
            throw new ServerError("Server failed while fetching chats")
        }
    }
}