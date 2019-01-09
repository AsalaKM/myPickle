const Profile = require("../models/Profile")

const registerProfile = async (supportType, newUser, approved) => {
  const userId = newUser._id
  const validateProfile = await Profile.find({ user: userId })

  //check if User has already registered a profile
  if (!validateProfile || validateProfile.length === 0) {
    const newProfile = new Profile({
      supportType,
      user: userId,
      approved,
    })
    await newProfile.save()
    const profileId = newProfile._id
    return profileId
  } else {
    throw new Error("Error registering profile for this user")
  }
}

module.exports = registerProfile
