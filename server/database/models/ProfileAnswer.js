const mongoose = require("mongoose")

const Schema = mongoose.Schema

// Create Schema
// Defines what kind of survey gets created: Pre(0), 1, 2 or 3

const AnswerSchema = new Schema({
  // this is where we link the question to the Profile
  profile: {
    // connect each answer to the exact profile
    type: Schema.Types.ObjectId, //FK ref the id in the Profile model
    ref: "profiles", // this says which model to go into
  },
  question: {
    // connect each answer to the exact question they're answering
    type: Schema.Types.ObjectId, //FK ref the id in the Profile model
    ref: "profiles", // this says which model to go into
  },
  // this is the answer the user has given us (this could be test, an array or an object)
  answer: {
    type: Schema.Types.Mixed,
    required: true,
  },
})

module.exports = ProfileAnswer = mongoose.model("answers", AnswerSchema)
