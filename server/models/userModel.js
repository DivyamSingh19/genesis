import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{type: String , required:true},
    email:{type:String , required:true , unique : true}, //unique true : one email , one account
    password:{type:String , required:true},
    cartData:{type:Object , default:{}},//when new user is created cart will have zero items
},{minimize:false})

const userModel = mongoose.models.user || mongoose.model('user',userSchema);
export default userModel;