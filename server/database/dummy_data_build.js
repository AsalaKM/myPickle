// load the mongo models
const ProfileQuestion = require("./models/ProfileQuestion")
const SupportType = require("./models/SupportType")
const User = require("./models/User")
const Profile = require("./models/Profile")
const ProfileAnswer = require("./models/ProfileAnswer")

// load profile questions build
const buildProfileQuestions = require("./buildProfileQuestions")

// load dbConnection
const dbConnection = require("./db_connection")

dbConnection()

const buildDb = async () => {
  //clear collections
  await User.deleteMany({})
  await SupportType.deleteMany({})
  await Profile.deleteMany({})
  await ProfileQuestion.deleteMany({})

  console.log("collections deleted")

  // insert profile questions
  await buildProfileQuestions()

  // insert users

  // therapist
  const therapist = new User({
    name: "Josephine Doeski",
    phone: "004407566683",
    email: "Josephine@the-therapists.co.uk",
    address: "66 Moaning Road E50DW London",
    password: "123456",
  })
  await therapist.save()
  console.log("user (therapist) added")

  // other / general user
  const generalUser = new User({
    name: "Henry Muscle",
    phone: "004407565473",
    email: "henry@fitness.co.uk",
    address: "66 Chelsea Lane W2893W London",
    password: "123456",
  })
  await generalUser.save()
  console.log("user (general) added")

  // get support type of therapists
  const supportTypeTherapist = await SupportType.findOne({ type: "Therapist" })

  // get support type of general users
  const supportTypeGeneral = await SupportType.findOne({ type: "General" })

  // create new profile for user with support type therapist and user_id as foreign keys
  const therapistProfile = new Profile({
    SupportType: supportTypeTherapist._id,
    user: therapist._id,
    approved: true,
  })

  await therapistProfile.save()
  console.log("therapist profile added")

  // create new profile for user with support type general and user_id as foreign keys
  const generalProfile = new Profile({
    SupportType: supportTypeGeneral._id,
    user: generalUser._id,
    approved: true,
  })

  await generalProfile.save()
  console.log("general profile added")

  // get all profile questions related to therapist type
  const therapistQuestions = await ProfileQuestion.find({ supportType: supportTypeTherapist._id })
  // get all profile questions related to general type
  const generalQuestions = await ProfileQuestion.find({ supportType: supportTypeGeneral._id })

  // create answers for therapist
  const therapistAnswers = await ProfileAnswer.insertMany([
    {
      profile: therapistProfile._id,
      question: therapistQuestions[0]._id,
      answer: "Emotional",
    },
  ])

  // create answers for general user
  const generalUserAnswers = await ProfileAnswer.insertMany([
    {
      profile: generalProfile._id,
      question: generalQuestions[0]._id,
      answer: "Physical",
    },
  ])

  console.log("therapist answers ...", therapistAnswers[0].answer)
  console.log("general answers ...", generalUserAnswers[0].answer)
}

buildDb().catch(err => console.log(err))

module.exports = buildDb
