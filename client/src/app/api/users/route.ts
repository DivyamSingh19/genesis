import { NextResponse } from "next/server";
import { registerUser, loginUser } from "@/server/controllers/userController"; 

export async function POST(req: Request) {
  try {
    const { action } = await req.json();

    if (action === "register") {
      return await registerUser(req);
    } else if (action === "login") {
      return await loginUser(req);
    } else {
      return NextResponse.json({ success: false, message: "Invalid action" }, { status: 400 });
    }
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}
