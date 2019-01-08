const Profile = require("../models/Profile")

const registerProfile = async (supportType, userId, approved) => {
  console.log("PROFILE BIT", userId)

  const newProfile = new Profile({
    supportType,
    userId,
    approved,
  })
  await newProfile.save()
  const profileId = newProfile._id
  return profileId
}

module.exports = registerProfile
