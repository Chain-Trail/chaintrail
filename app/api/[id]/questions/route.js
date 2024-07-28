// app/api/quests/[questId]/questions/route.js

import { NextResponse } from "next/server";
import connectDb from "@/lib/mongodb";
import Quest from "@/models/Quest";

export async function POST(request, { params }) {
  try {
    // Connect to the database
    await connectDb();
    console.log("Connected to the database");

    // Get the quest ID from the URL params
    const { questId } = params;

    // Parse the request body to get the new question data
    const body = await request.json();
    console.log("Received quest question data:", body);

    // Find the quest by ID and add the new question to the questQuestions array
    const updatedQuest = await Quest.findByIdAndUpdate(
      questId,
      { $push: { questQuestions: body } },
      { new: true, useFindAndModify: false }
    );

    if (!updatedQuest) {
      return NextResponse.json({ error: "Quest not found" }, { status: 404 });
    }

    console.log("Updated quest with new question:", updatedQuest);

    // Return the updated quest as the response
    return NextResponse.json(updatedQuest, { status: 201 });
  } catch (error) {
    console.error("Error adding quest question:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
