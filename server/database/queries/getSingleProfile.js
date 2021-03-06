// load the mongo models
const ProfileAnswer = require("../models/ProfileAnswer")
const Profile = require("../models/Profile")
// const Users = require("../models/User")

// load image function
const getImageNames = require("../queries/getImageNames")

const getAnswersProfile = async profileID => {
  // get the profile with the ID
  // you need to do this to make sure the id you feed into the mongoose query below is an object not a string
  const profile = await Profile.findById(profileID)

  const allAnswers = await ProfileAnswer.aggregate([
    { $match: { profile: profile._id } },
    {
      $lookup: {
        from: "questions",
        localField: "question",
        foreignField: "_id",
        as: "question",
      },
    },
  ])

  const BasicInfo = await Profile.aggregate([
    {
      $match: { _id: profile._id },
    },
    {
      $lookup: {
        from: "users",
        localField: "user",
        foreignField: "_id",
        as: "BsicInfo",
      },
    },
  ])

  const basicInfoAnswers = allAnswers.filter(
    answer =>
      answer.question[0].section === "Admin Info" || answer.question[0].section === "Basic Info"
  )

  const supportDetails = allAnswers.filter(
    answer => answer.question[0].section === "Support Details"
  )

  const socialMedia = allAnswers.filter(answer => answer.question[0].section === "Social Media")

  const bookingDetails = allAnswers.filter(
    answer => answer.question[0].section === "Availability & Booking"
  )

  // check if profile image

  // insert file path of profile pictures folder
  const filePath = `${__dirname}/../../assets/profile-images`
  const getImageArr = await getImageNames(filePath)

  const profileImage = getImageArr.filter(imageName => imageName.split("-")[0] === profileID)

  console.log("image", profileImage)

  return {
    ...BasicInfo[0],
    ...allAnswers,
    basicInfoAnswers,
    supportDetails,
    socialMedia,
    bookingDetails,
    profileImage,
  }
}

module.exports = getAnswersProfile
