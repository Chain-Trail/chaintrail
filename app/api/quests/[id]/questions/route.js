// app/api/quests/[questId]/questions/route.js

import { NextResponse } from 'next/server';
import connectDb from '@/lib/mongodb';
import Quest from '@/models/QuestQuestionSchema';

export async function POST(request, { params }) {
  try {
    const { questId } = params;
    console.log("Received questId:", questId);

    await connectDb();
    console.log("Connected to the database");

    const body = await request.json();
    console.log("Received request body:", body);

    const quest = await Quest.findById(questId);
    console.log("Quest found:", quest);

    if (!quest) {
      console.error("Quest not found:", questId);
      return NextResponse.json({ error: 'Quest not found' }, { status: 404 });
    }


    // Validate the incoming question data
    if (!body.questImage1 || !body.questImage2 || !body.questImage3 || !body.questImage4 || !body.questHints || !Array.isArray(body.questPossibleAnswers)) {
      return NextResponse.json({ error: 'Invalid question data' }, { status: 400 });
    }

    // Add the new question to the quest's questQuestions array
    quest.questQuestions.push(body);
    const updatedQuest = await quest.save();
    console.log("Question added to quest:", updatedQuest);

    return NextResponse.json({ message: 'Question added successfully', quest: updatedQuest }, { status: 201 });
  } ccatch (error) {
    console.error("Error adding question to quest:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


export async function GET(request, { params }) {
  try {
    const { questId } = params;
    await connectDb();
    const quest = await Quest.findById(questId);
    if (!quest) {
      return NextResponse.json({ error: 'Quest not found' }, { status: 404 });
    }
    return NextResponse.json(quest);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


