const mongoose = require("mongoose")

const Schema = mongoose.Schema

// Create Schema
// Defines what kind of survey gets created: Pre(0), 1, 2 or 3

const QuestionSchema = new Schema({
  // this is where we link the question to the SupportType
  supportType: {
    // connect each question to the type of support (e.g. therapist)
    type: Schema.Types.ObjectId, //FK ref the id in the SupportType model
    ref: "supportTypes", // this says which model to go into
  },
  // this is the text of the question
  questionText: {
    type: String,
    required: true,
  },
  // this tells us what type of input we want for this question checkbox, textfield, dropdown ..
  inputType: {
    type: String,
    required: true,
  },
  // this is any additional text we provide user to explain the question
  helperText: {
    type: String,
  },
  // this is where we can list options for the user to choose for that question (e.g. Emotional)
  options: {
    type: Schema.Types.Mixed,
  },
  // this is where we say whether the question must be answered by the user or is optional
  isRequired: {
    type: Boolean,
    default: false,
  },
  // this is the section it falls into (e.g. Basic Info, Support Details)
  section: {
    type: String,
    required: true,
  },
})

module.exports = ProfileQuestion = mongoose.model("questions", QuestionSchema)
