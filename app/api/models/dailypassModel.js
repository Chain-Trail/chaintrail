import mongoose from 'mongoose';


const DailySchema = new mongoose.Schema(
    {
        id: Number,
        userId: String,
        username: String,
        points: { type: Number, default: 950 },
        lastClaimTimestamp: { type: Date },
    },
    { timestamps: true }
);

// images: String,
// answer: String

const Daily = mongoose.models.Daily || mongoose.model("Daily", DailySchema);

export default Points;