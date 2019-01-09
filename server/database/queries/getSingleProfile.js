// load the mongo models
const ProfileAnswer = require("../models/ProfileAnswer")
const Profile = require("../models/Profile")
console.log("hello");

// const profileID = '5c2c9c41d2a9fe38cc19d0c3'
const getAnswersProfile = async profileID => {
  console.log(profileID,'profileID');

  // get the profile with the ID
  // you need to do this to make sure the id you feed into the mongoose query below is an object not a string
  const profile = await Profile.findById(profileID)
  console.log(profile);


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

  // const BasicInfo = await Users.find({_id:id},{name:1,phone:1,email:1})
  // console.log(res);
  return allAnswers
}

module.exports = getAnswersProfile