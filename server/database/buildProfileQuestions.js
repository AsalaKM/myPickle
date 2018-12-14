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

  const therapistType = await SupportType.findOne({
    type: "Therapist",
  })

  const generalType = await SupportType.findOne({
    type: "General",
  })

  console.log("support created")

  // insert all the questions!
  await ProfileQuestion.insertMany([
    {
      supportType: generalType._id,
      questionText: "Please select your area(s) of wellness",
      inputType: "checkbox",
      helperText: "You can select as many as you like",
      options: [
        "Emotional",
        "Social",
        "Physical",
        "Financial",
        "Spiritual",
        "Intellectual",
        "Environmental",
        "Occupational",
      ],
      isRequired: true,
      category: "Wellness Area",
    },
    {
      supportType: generalType._id,
      questionText: "Contact name",
      inputType: "checkbox",
      options: [
        "Emotional",
        "Social",
        "Physical",
        "Financial",
        "Spiritual",
        "Intellectual",
        "Environmental",
        "Occupational",
      ],
      isRequired: true,
      category: "Wellness Area",
    },
  ])
}

buildProfileQuestions().catch(err => console.log(err))

module.exports = buildProfileQuestions
