// load the mongo models
const ProfileQuestion = require("../../models/ProfileQuestion")
const Profile = require("../../models/Profile")
const SupportType = require("../../models/SupportType")

// GET QUESTIONS
// general query function to get the questions for each edit profile section

const getQuestions = async (section, profileID) => {
  // get the section from the URL and then cerate the write label to find it in the db
  let sectionType = ""

  if (section === "support-details") sectionType = "Support Details"
  if (section === "basic-info") sectionType = "Basic Info"
  if (section === "availability-booking") sectionType = "Availability & Booking"
  if (section === "admin-info") sectionType = "Admin Info"
  if (section === "target-clients") sectionType = "Target Clients"
  if (section === "social-media") sectionType = "Social Media"

  // get the profile details
  const profile = await Profile.findById(profileID)

  // see what type of support provider they are (e.g. therapist, general)
  const supportTypeDetails = await Profile.aggregate([
    { $match: { _id: profile._id } },
    {
      $lookup: {
        from: "supporttypes",
        localField: "supportType",
        foreignField: "_id",
        as: "supportType",
      },
    },
  ])

  // set up questions variable
  let questions

  // get the general support type details
  const generalSupportType = await SupportType.findOne({ type: "General" })

  // check if they are a therapist or general
  const profileSupportType = supportTypeDetails[0].supportType[0].type

  // if general they only get the general questions
  if (profileSupportType === "General") {
    // if section is Basic Info we need to get Basic and Admin info
    if (sectionType === "Basic Info") {
      console.log("general reached")
      questions = await ProfileQuestion.find({
        $and: [
          { supportType: generalSupportType._id },
          { $or: [{ section: "Admin Info" }, { section: "Basic Info" }] },
        ],
      })
    } else {
      questions = await ProfileQuestion.find({
        $and: [{ section: sectionType }, { supportType: generalSupportType._id }],
      })
    }
  }
  // if therapist they get all the questions
  else {
    if (sectionType === "Basic Info") {
      console.log("therapist reached")
      questions = await ProfileQuestion.find({
        $or: [{ section: "Admin Info" }, { section: "Basic Info" }],
      })
    } else {
      questions = await ProfileQuestion.find({ section: sectionType })
    }
  }
  return questions
}

module.exports = getQuestions
