import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    userId: String,
    username: String,
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
