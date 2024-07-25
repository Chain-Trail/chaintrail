import { NextResponse } from "next/server";
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(" MONGODB_URI is missing or incorrect");
}

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UserSchema = new mongoose.Schema(
  {
    userId: String,
    username: String,
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export async function POST(request) {
  const { userId, username } = await request.json();

  try {
    let user = await User.findOne({ userId });

    if (user) {
      return NextResponse.json({ message: "Welcome Back, " });
    }

    user = new User({ userId, username });
    await user.save();

    return NextResponse.json({ message: "Successfully registered " });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
