const Profile = require("../models/Profile")

const getUser = async profileID => {
  const profile = await Profile.findById(profileID)
  const { _id } = profile
  const user = await Profile.aggregate([
    { $match: { _id } },
    { $lookup: { from: "users", localField: "user", foreignField: "_id", as: "user" } },
  ])
  const { name } = user[0].user[0]
  return name
}

module.exports = getUser
