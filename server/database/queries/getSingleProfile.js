// load the mongo models
const ProfileAnswer = require("../models/ProfileAnswer")
const Profile = require("../models/Profile")
const Users = require("../models/User")

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

  const BasicInfo = await Profile.aggregate([{
    $match:{_id: profile._id }},
  {
    $lookup:{

        from:'users',
        localField:'user',
        foreignField:'_id',
        as:'BsicInfo'
}}])

return {...BasicInfo[0],...allAnswers};
}

module.exports = getAnswersProfile