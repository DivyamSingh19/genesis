import prisma from "../utils/prisma";
import { ServerError } from "./error.service";
export class ChatService{
    async getChats(userId:string) {
        try {
            const chats = await prisma.chat.findMany({where:{userId:userId}})
            return chats
        } catch (error) {
            throw new ServerError("Server failed while fetching chats")
        }
    }

    async getChatById(chatId:string){
        try {
            const chatdata = await prisma.chat.findFirst({where:{id:chatId}})
            return chatdata
        } catch (error) {
            throw new ServerError("Server failed by fetching chat")
        }
    }
}