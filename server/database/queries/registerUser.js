const User = require("../models/user")

const registerUser = async (name, email, phone, password) => {
  const userExists = await User.findOne({ email })
  if (userExists) {
    console.log("user exists")
    return
  } else {
    const newUser = new User({
      name,
      email,
      phone,
      password,
    })
    await newUser.save()
    console.log("NEW!!!", newUser)
    const userId = newUser._id
    return userId
  }
}

module.exports = registerUser
