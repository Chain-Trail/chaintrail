import QuestionModel from '../models/questionModel'

export async function GET(request) {
    // const userId = request.nextUrl.searchParams.get("id");

    // const id = req.query.id;

    const { searchParams } = new URL(request.URL);
    const id = searchParams.get("id")

    try {
        const questionModel = await QuestionModel.findOne({ id });

        if (questionModel) {
            const data = JSON.parse(questionModel.questions);

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
    const { quest } = await request.json();

    // const quests = {
    //     quest,
    //     isOpened: false,
    //     isCompleted: false
    // }

    const isAnswered = [false, false, false, false, false, false, false, false, false, false];

    const quests = new QuestionModel({
        id: 0,
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
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}
