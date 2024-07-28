// app/api/quests/[questId]/questions/route.js

import { NextResponse } from "next/server";
import connectDb from "@/lib/mongodb";
import Quest from "@/models/QuestQuestionSchema";

export async function POST(request, { params }) {
  try {
    const { questId } = params;
    await connectDb();
    console.log("Connected to the database");

    const body = await request.json();
    console.log("Received request body:", body);

    const quest = await Quest.findById(questId);
    if (!quest) {
      console.error("Quest not found:", questId);
      return NextResponse.json({ error: "Quest not found" }, { status: 404 });
    }

    quest.questQuestions.push(body);
    await quest.save();
    console.log("Question added to quest:", quest);

    return NextResponse.json(
      { message: "Question added successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding question to quest:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
