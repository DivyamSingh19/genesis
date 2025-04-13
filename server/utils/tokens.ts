import JWT from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config()

const createToken = async (id:string) => {
    return JWT.sign({id},process.env.JWT_SECRET as string)
}

export {createToken}