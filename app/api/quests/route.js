// app/api/quests/route.js

import { NextResponse } from "next/server";
import connectDb from "@/lib/mongodb";
import Quest from "@/models/QuestQuestionSchema";

export async function POST(request) {
  try {
    // Connect to the database
    await connectDb();
    console.log("Connected to the database");

    // Parse the request body
    const body = await request.json();
    console.log("Received quest data:", body);

    // Create a new quest document
    const newQuest = new Quest(body);
    console.log("Created new Quest object:", newQuest);

    // Save the quest to the database
    const savedQuest = await newQuest.save();
    console.log("Saved quest to database:", savedQuest);

    // Return the saved quest as the response
    return NextResponse.json(savedQuest, { status: 201 });
  } catch (error) {
    console.error("Error creating quest:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDb();
    const quests = await Quest.find({}, '_id questName');
    return NextResponse.json(quests);
  } catch (error) {
    console.error('Error fetching quests:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
