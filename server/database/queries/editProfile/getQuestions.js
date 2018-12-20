// load the mongo models
const ProfileQuestion = require("../../models/ProfileQuestion")
const Profile = require("../../models/Profile")

// GET QUESTIONS
// general query function to get the questions for each edit profile section

const getQuestions = async section => {
  let sectionType = ""

  if (section === "support-details") sectionType = "Support Details"
  if (section === "basic-info") sectionType = "Basic Info"
  if (section === "availability-booking") sectionType = "Availability & Booking"
  if (section === "admin-info") sectionType = "Admin Info"
  if (section === "target-clients") sectionType = "Target Clients"

  const questions = await ProfileQuestion.find({ section: sectionType })

  return questions
}

module.exports = getQuestions
