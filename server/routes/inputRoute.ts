import express, { NextFunction } from 'express';
import { addPrompt, getPrompts } from '../controllers/inputController';
import { Request,Response } from 'express';
const promptRouter = express.Router();

promptRouter.post('/prompts',async (req:Request,res:Response,next:NextFunction) =>{
    try {
        addPrompt(req,res)
    } catch (error) {
        next()
    }
});
promptRouter.get('/prompts', async (req:Request,res:Response,next:NextFunction) => { 
    try {
        getPrompts(req,res)
    } catch (error) {
        next()
    }
});

export default promptRouter;