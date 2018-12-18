const Profile = require("../models/Profile")

const registerProfile = async (supportType, userId, approved) => {
  const userExists = await User.findOne({ userId })
  if (userExists) {
    console.log("user exists")
    return
  } else {
    const newProfile = new Profile({
      supportType,
      userId,
      approved,
    })
    await newProfile.save()
    return newProfile
  }
}

module.exports = registerProfile
