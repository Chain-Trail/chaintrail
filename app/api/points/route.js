import User from "@/models/User";
import connectDb from "@/lib/mongodb";
import { NextResponse } from "next/server";
// New route for updating user points

await connectDb();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }

  const { userId, increment } = await req.json();

  try {
    const user = await User.findOne({ userId });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    user.points += increment;
    await user.save();

    return NextResponse.json({
      message: "Points updated successfully",
      points: user.points,
    });
  } catch (error) {
    console.error("Error updating points:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}