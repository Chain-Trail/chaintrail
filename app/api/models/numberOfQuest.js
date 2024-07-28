import mongoose from 'mongoose';


const NumberOfQuestsSchema = new mongoose.Schema(
    {
        id: Number,
        NumberOfQuests: { type: Number },
        lastClaimTimestamp: { type: Date },
    },
    { timestamps: true }
);

// images: String,
// answer: String

const NumberOfQuests = mongoose.models.NumberOfQuests || mongoose.model("NumberOfQuests", NumberOfQuestsSchema);

export default NumberOfQuests;
