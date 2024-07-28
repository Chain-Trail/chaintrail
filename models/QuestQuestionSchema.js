// models/Quest.js
const mongoose = require("mongoose");

const questQuestionSchema = new mongoose.Schema({
  questImage1: { type: String, required: true },
  questImage2: { type: String, required: true },
  questImage3: { type: String, required: true },
  questImage4: { type: String, required: true },
  questHints: { type: String, required: true },
  questPossibleAnswers: { type: [String] },
  isAnswered: { type: Boolean, default: false },
});

const questSchema = new mongoose.Schema({
  questName: { type: String, required: true },
  questImage: { type: String, required: true },
  questStatus: { type: String, required: true },  
  questQuestions: { type: [questQuestionSchema], required: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.models.Quest || mongoose.model("Quest", questSchema);
