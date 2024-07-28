import { NextResponse } from "next/server";
import NumberOfQuestsModel from "../models/numberOfQuest";
import connectDb from "@/lib/mongodb";

export async function GET() {
  try {
    await connectDb();
    const questionModel = await NumberOfQuestsModel.findOne();

    if (questionModel) {
      return NextResponse.json(questionModel.NumberOfQuests);
    } else {
      return NextResponse.json(
        { message: "Quest number not found" },
        { status: 404 }
      );
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    await connectDb();
    const { questNumber } = await req.json();

    const result = await NumberOfQuestsModel.findOneAndUpdate(
      {},
      { $set: { NumberOfQuests: questNumber } },
      { upsert: true, new: true }
    );

    return NextResponse.json(
      { message: "Updated Successfully", newNumber: result.NumberOfQuests },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Server error: Could not update" },
      { status: 500 }
    );
  }
}
