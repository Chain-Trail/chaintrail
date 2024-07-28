import { NextResponse } from "next/server";
import NumberOfQuestsModel from "../models/numberOfQuest";
import connectDb from "@/lib/mongodb";

await connectDb();


export async function GET() {

    try {
        const questionModel = await NumberOfQuestsModel.find().toArray();

        if (questionModel) {
            const data = questionModel;

            return NextResponse.json({ data });
        } else {
            return NextResponse.json({ message: "Quest not found" }, { status: 404 });
        }
    } catch (err) {
        console.error(err);
        // return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}

export async function PUT(req) {
    const id = req.query.id;
    const updatedData = await req.body();

    try {
        const questNumber = await NumberOfQuestsModel.findOne({ id });

        questNumber.NumberOfQuests = updatedData;
        return NextResponse.json({ message: "Updated Successfully" }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: "Server error: Could not update" }, { status: 500 });
    }
}