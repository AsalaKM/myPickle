const Profile = require("../models/Profile")

const getUser = async profileID => {
  const user = await Profile.aggregate([
    { $match: { _id: profileID } },
    { $lookup: { from: "users", localField: "user", foreignField: "_id", as: "user" } },
  ])
  console.log(user)

  return user
}

module.exports = getUser
