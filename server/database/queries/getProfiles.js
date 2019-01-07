const mongoose = require("mongoose")
const Answer = require("../models/ProfileAnswer")

require("../db_connection")()

Answer.aggregate([
  {
    $lookup: {
      from: "questions",
      localField: "question", // field in the Answer collection
      foreignField: "_id", // field in the Question collection
      as: "question",
    },
  },
  {
    $match: {
      $or: [
        { "question.questionText": "Please select your area(s) of wellness" },
        { "question.questionText": "Please provide a brief description of the organisation" },
        { "question.questionText": "Organisation photo or logo" },
        { "question.questionText": "Registered address" }
      ]
    },
  },
]).then(res => {
  console.log(res[0])
  console.log(res[1])
  console.log(res[2])
  console.log(res[3])



})
