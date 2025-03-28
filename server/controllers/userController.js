import userModel from "../models/userModel.js";
import validator from 'validator'
import bycrypt from 'bcrypt'
import JWT from 'jsonwebtoken'
import "dotenv"

const createToken = (id) =>{
    return JWT.sign({id},process.env.JWT_SECRET)
}
 
const loginUser = async (req,res) => {
        try {
            const {email,password} = req.body;
            const user = await userModel.findOne({email});
            if(!user){
                return res.json({success:false , message:"User doesn't exists"})
            }
            const isMatch = await bycrypt.compare(password,user.password);
            if(isMatch){
                const token = createToken(user._id)
                res.json({success:true,token})
            }else{
                res.json({success:false,message:'Invalid credentials'})
            }
            
        } catch (error) {
            console.log(error);
            res.json({success:false,message:error.message})
        }
}

 
const registerUser = async (req,res) => {
    try {
        const {name,email,password} = req.body;
          
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success:false, message : "User already exists"})
        }

        
        if(!validator.isEmail(email)){
            return res.json({success:false, message:"Please enter a valid email"});
        }
        if(password.length<8){
            return res.json({success:false, message:"Please enter a strong password"});
        }
         
        const salt = await bycrypt.genSalt(10)
        
         
        const hashedPassword = await bycrypt.hash(password,salt)

        const newUser = new userModel({
            name,
            email,
            password:hashedPassword
        })
        const user = await newUser.save()

        const token = createToken(user._id)

        res.json({success:true , token})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

export {loginUser , registerUser }