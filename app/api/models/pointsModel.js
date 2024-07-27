import mongoose from 'mongoose';


const PointsSchema = new mongoose.Schema(
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

const Points = mongoose.models.Points || mongoose.model("Points", PointsSchema);

export default Points;
