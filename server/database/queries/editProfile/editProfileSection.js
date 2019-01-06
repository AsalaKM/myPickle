// load the mongo models
const ProfileAnswer = require("../../models/ProfileAnswer")
const Profile = require("../../models/Profile")

// INITIAL SIGNUP
// get support details questions and answers for those questions that have been pre-filled

const editProfileSection = async (section, profileID) => {
  // get the section from the URL and then cerate the write label to find it in the db
  let sectionType = ""

  if (section === "support-details") sectionType = "Support Details"
  if (section === "basic-info") sectionType = "Basic Info"
  if (section === "availability-booking") sectionType = "Availability & Booking"
  if (section === "admin-info") sectionType = "Admin Info"
  if (section === "target-clients") sectionType = "Target Clients"
  if (section === "social-media") sectionType = "Social Media"

  // get the profile with the ID
  // you need to do this to make sure the id you feed into the mongoose query below is an object not a string
  const profile = await Profile.findById(profileID)

  // get all the answers for this profile
  // add the question details for each question
  // filter out any question/answers that aren't Support Details

  const profileSection = await ProfileAnswer.aggregate([
    { $match: { profile: profile._id } },
    { $lookup: { from: "questions", localField: "question", foreignField: "_id", as: "question" } },
    { $unwind: "$question" },
    { $match: { "question.section": sectionType } },
  ])
  let profileSectionAnswers = {}

  profileSection.forEach(answer => (profileSectionAnswers[answer.question._id] = answer.answer))

  return profileSectionAnswers
}

module.exports = editProfileSection
