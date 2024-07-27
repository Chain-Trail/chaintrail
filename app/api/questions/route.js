import QuestionModel from '../models/questionModel';
import NumberOfQuestsModel from "../models/numberOfQuest";

export async function GET(request) {
    // const userId = request.nextUrl.searchParams.get("id");

    // Try this one if it generates error
    // const id = req.query.id;

    const { searchParams } = new URL(request.URL);
    const id = searchParams.get("id")

    try {
        const questionModel = await QuestionModel.findOne({ id });

        if (questionModel) {
            const data = questionModel;

            return NextResponse.json({ data });
        } else {
            return NextResponse.json({ message: "Quest not found" }, { status: 404 });
        }
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}

export async function POST(request) {
    const { quest, questNumber } = await request.json();

    // const quests = {
    //     quest,
    //     isOpened: false,
    //     isCompleted: false
    // }

    const isAnswered = [false, false, false, false, false, false, false, false, false, false];

    const quests = new QuestionModel({
        questNumber,
        quest,
        isAnswered: JSON.stringify(isAnswered),
        isOpened: false,
        isCompleted: false
    });

    try {
        await quests.save();
        return NextResponse.json({ message: "Saved successfully" });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: "Server error - Check questions>route" }, { status: 500 });
    }
};

export async function PUT(req) {

    const id = req.query.id;
    const updatedData = await req.body();

    try {
        const quest = await QuestionModel.findOne({ id });

        if (!quest) {
            return NextResponse.json({ message: "Something went wrong!" }, { status: 404 });
        }

        if (updatedData == isOpened) {
            quest.isOpened = updatedData.isOpened;   //set to true
        }

        if (updatedData == isCompleted) {
            quest.isCompleted = updatedData.isCompleted;   //set to true
        }

        if (updatedData == isAnswered) {
            const isAnswered = JSON.parse(quest.isAnswered);
            isAnswered[id] = updatedData.isAnswered;   //set to true
        }

        // const result = await collection.updateOne({ id: id }, { $set: updatedData });
        // res.status(200).json({ message: `Item with ID ${id} updated successfully` });

    } catch (error) {

        res.status(500).json({ message: 'Error updating item' });

    }
};