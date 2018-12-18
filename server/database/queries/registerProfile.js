const Profile = require("../models/Profile")

const registerProfile = async (supportType, userId, approved) => {
  const newProfile = new Profile({
    supportType,
    userId,
    approved,
  })
  await newProfile.save()
  return newProfile
}

module.exports = registerProfile
