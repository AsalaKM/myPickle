const User = require("../models/User")
const bcrypt = require("bcryptjs")

const registerUser = (name, email, phone, password) =>
  new Promise((resolve, reject) => {
    const newUser = new User({
      name,
      email,
      phone,
      password,
    })

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err
        newUser.password = hash
        newUser
          .save()
          .then(resolve)
          .catch(err => reject(err))
      })
    })
  })

// }) {
// NOTE: don't need to check userExists as this is already done at register step two
// but could be good go add here again for extra safety

// const userExists = await User.findOne({ email })
// if (userExists) {
//   console.log("user exists")
//   return
// }

//   await bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(newUser.password, salt, (err, hash) => {
//       if (err) throw err
//       newUser.password = hash
//     })
//   })
//   await newUser.save()
//   const userId = newUser._id
//   return userId
// }

module.exports = registerUser
