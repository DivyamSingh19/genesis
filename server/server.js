 
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongo.js';
 
import userRouter from './routes/userRoute.js';
 

 
const app = express();
const port =process.env.PORT || 4000
connectDB()
 


//middlewares
app.use(express.json())
app.use(cors()) 

 
app.use('/api/user',userRouter)
 

app.get('/',(req,res)=>{
    res.send("API Working")
})
app.listen(port, () => console.log('Server started on PORT ' + port))
