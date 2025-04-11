import JWT from "jsonwebtoken";


const createToken = async (id:string) => {
    return JWT.sign({id},process.env.JWT_SECRET as string)
}

export {createToken}