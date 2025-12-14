import prisma from "../utils/prisma";
import { Request, Response } from "express";



// Interface for the prompt data structure
interface PromptData {
  content: string;
  userId: string; // Now required for credit checking
  imageUrl?: string; // URL to the generated image
  modelResponse?: string; // Any text response from the model
}

 
const IMAGE_GENERATION_COST = 10; 

 
async function addPrompt(req: Request, res: Response) {
  try {
    const { prompt, userId, imageUrl, modelResponse } = req.body;

    // Validate required fields
    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt content is required"
      });
    }

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User ID is required for credit management"
      });
    }

    // Start a transaction to ensure data consistency
    return await prisma.$transaction(async (tx) => {
      // 1. Check if user has enough credits
      const user = await tx.user.findUnique({
        where: { id: userId },
        select: { id: true, credit: true }
      });

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found"
        });
      }

      if (user.credit < IMAGE_GENERATION_COST) {
        return res.status(403).json({
          success: false,
          message: "Insufficient credits. You need at least 10 credits to generate an image."
        });
      }

      // 2. Create the prompt record
      const newPrompt = await tx.prompt.create({
        data: {
          text: prompt,
          userId: userId,
          imageUrl: imageUrl, 
          modelResponse: modelResponse
        }
      });

      // 3. Reduce user credits
      await tx.user.update({
        where: { id: userId },
        data: {
          credit: {
            decrement: IMAGE_GENERATION_COST
          }
        }
      });

      // 4. Return success with updated credit info
      const updatedUser = await tx.user.findUnique({
        where: { id: userId },
        select: { credit: true }
      });

      return res.status(201).json({
        success: true,
        message: "Prompt added successfully",
        data: newPrompt,
        credits: updatedUser?.credit
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: (error as Error).message
    });
  }
}
 
async function checkCredits(req: Request, res: Response) {
  try {
    const { userId } = req.query;
    
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User ID is required"
      });
    }

    // Find the user and check credits
    const user = await prisma.user.findUnique({
      where: { id: userId as string },
      select: { credit: true }
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    const hasEnoughCredits = user.credit >= IMAGE_GENERATION_COST;

    return res.status(200).json({
      success: true,
      hasEnoughCredits,
      credits: user.credit,
      requiredCredits: IMAGE_GENERATION_COST
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: (error as Error).message
    });
  }
}

/**
 * Get all prompts for display in the sidebar
 * Optionally filtered by userId if provided
 */
async function getPrompts(req: Request, res: Response) {
  try {
    const userId = req.query.userId as string | undefined;
    const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;
    const page = req.query.page ? parseInt(req.query.page as string) : 1;
    const skip = (page - 1) * limit;

    // Query conditions
    const where = userId ? { userId } : {};

    // Fetch prompts with pagination
    const prompts = await prisma.prompt.findMany({
      where,
      orderBy: {
        createdAt: 'desc' // Most recent first
      },
      skip,
      take: limit,
      select: {
        id: true,
        text: true,
        imageUrl: true,
        createdAt: true
      }
    });

    // Get total count for pagination
    const totalPrompts = await prisma.prompt.count({ where });

    return res.status(200).json({
      success: true,
      data: prompts,
      pagination: {
        total: totalPrompts,
        page,
        limit,
        pages: Math.ceil(totalPrompts / limit)
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: (error as Error).message
    });
  }
}

export { addPrompt, getPrompts, checkCredits };