import mongoose from 'mongoose';


const QuestSchema = new mongoose.Schema(
    {
        id: Number,
        quest: String,
        isAnswered: String,
        isOpened: Boolean,
        isCompleted: Boolean

        // images: String,
        // answer: String
    }
)

const Quest = mongoose.models.Quest || mongoose.model("Quest", QuestSchema);

export default Quest;
