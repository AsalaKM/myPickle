// this file sets up all the questions and also the support types (e.g. Therapist) that each one needs to link to

// load the mongo model
const ProfileQuestion = require("./models/ProfileQuestion")
const SupportType = require("./models/SupportType")

const dbConnection = require("./db_connection")

dbConnection()

const buildProfileQuestions = async () => {
  // clear profile model
  await ProfileQuestion.deleteMany({})
  await SupportType.deleteMany({})

  // insert types of support
  await SupportType.insertMany([
    {
      type: "Therapist",
    },
    {
      type: "General",
    },
  ])

  console.log("support created")

  // insert all the questions!
  // await ProfileQuestion.insertMany([{}])
}

buildProfileQuestions().catch(err => console.log(err))

module.exports = buildProfileQuestions
