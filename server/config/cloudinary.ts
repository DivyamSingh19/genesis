import {v2 as cloudinary }from "cloudinary"

const connectCloudinary = ()=>{
    cloudinary.config(
       { 
        cloud_name:process.env.CLOUDINARY_NAME,
        cloudinaryApi: process.env.CLOUDINARY_API,
        cloudinarySecret : process.env.CLOUDINARY_SECRET,

        }
    )
    console.log("Cloudinary connected")
} 
export default connectCloudinary