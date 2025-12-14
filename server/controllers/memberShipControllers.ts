import prisma from "../utils/prisma";
import { Request, Response } from "express";



enum MembershipType {
  BASIC = "basic",
  GOLD = "gold",
  DIAMOND = "diamond"
}

const membershipCredits = {
  [MembershipType.BASIC]: 500,
  [MembershipType.GOLD]: 1000,
  [MembershipType.DIAMOND]: 2000
};

async function addMembership(req: Request, res: Response) {
  try {
    const { userId, membershipType } = req.body;

    if (!userId || !membershipType) {
      return res.status(400).json({
        status: false,
        message: "User ID and membership type are required"
      });
    }

    if (!Object.values(MembershipType).includes(membershipType as MembershipType)) {
      return res.status(400).json({
        status: false,
        message: "Invalid membership type. Must be basic, gold, or diamond"
      });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId }
    });

    if (!user) {
      return res.status(404).json({
        status: false,
        message: "User not found"
      });
    }

    const existingMembership = await prisma.membership.findUnique({
      where: { userId }
    });

    const creditsToAdd = membershipCredits[membershipType as MembershipType];
    const expiryDate = new Date();
    expiryDate.setMonth(expiryDate.getMonth() + 1); 

    if (existingMembership) {
      
      const updatedMembership = await prisma.membership.update({
        where: { userId },
        data: {
          type: membershipType,
          expiryDate,
        }
      });

      
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: {
          credit: {
            increment: creditsToAdd
          }
        }
      });

      return res.status(200).json({
        status: true,
        message: `Membership upgraded to ${membershipType}`,
        data: {
          membership: updatedMembership,
          user: {
            id: updatedUser.id,
            credits: updatedUser.credit
          }
        }
      });
    } else {
       
      const newMembership = await prisma.membership.create({
        data: {
          userId,
          type: membershipType,
          expiryDate
        }
      });

       
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: {
          credit: {
            increment: creditsToAdd
          }
        }
      });

      return res.status(201).json({
        status: true,
        message: `${membershipType} membership activated successfully`,
        data: {
          membership: newMembership,
          user: {
            id: updatedUser.id,
            credits: updatedUser.credit
          }
        }
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      message: (error as Error).message
    });
  }
}

async function terminateMembership(req: Request, res: Response) {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({
        status: false,
        message: "User ID is required"
      });
    }

    const membership = await prisma.membership.findUnique({
      where: { userId }
    });

    if (!membership) {
      return res.status(404).json({
        status: false,
        message: "No active membership found for this user"
      });
    }

    
    await prisma.membership.delete({
      where: { userId }
    });

    
    await prisma.user.update({
      where: { id: userId },
      data: {
        credit: 50
      }
    });

    return res.status(200).json({
      status: true,
      message: "Membership terminated successfully. Credits reset to 0."
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      message: (error as Error).message
    });
  }
}

 
async function checkAndExpireMemberships() {
  try {
    const now = new Date();
    
    // Find all expired memberships
    const expiredMemberships = await prisma.membership.findMany({
      where: {
        expiryDate: {
          lt: now
        }
      },
      include: {
        user: true
      }
    });
    
    
    for (const membership of expiredMemberships) {
      
      await prisma.user.update({
        where: { id: membership.userId },
        data: {
          credit: 0
        }
      });
      
       
      await prisma.membership.delete({
        where: { id: membership.id }
      });
    }
    
    return {
      status: true,
      message: `${expiredMemberships.length} expired memberships processed`,
      processedMemberships: expiredMemberships.length
    };
  } catch (error) {
    console.error("Error in checkAndExpireMemberships:", error);
    return {
      status: false,
      message: (error as Error).message
    };
  }
}

export { terminateMembership, addMembership, checkAndExpireMemberships };