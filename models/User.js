import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    userId: String,
    username: String,
    points: { type: Number, default: 950 },
    lastClaimTimestamp: { type: Date },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
