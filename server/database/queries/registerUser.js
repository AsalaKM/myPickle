const User = require("../models/User")

const registerUser = async (name, email, phone, password) => {
  const userExists = await User.findOne({ email })
  if (userExists) {
    console.log("user exists")
    
  } else {
    const newUser = new User({
      name,
      email,
      phone,
      password,
    })
    await newUser.save()
    const userId = newUser._id
    return userId
  }
}

module.exports = registerUser
