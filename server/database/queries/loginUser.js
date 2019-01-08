const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("env2")("./config.env")

// load models
const User = require("../models/User")
const Profile = require("../models/Profile")

const loginTrainer = (email, password, errors) =>
  new Promise((resolve, reject) => {
    User.findOne({ email }).then(user => {
      if (!user) {
        errors.email = "User not found"
        reject(errors)
      } else {
        bcrypt.compare(password, user.password).then(match => {
          console.log("password match", match)

          if (match) {
            // need to now get the profile ID for this user
            Profile.findOne({ user: user._id })
              .then(profile => {
                console.log("profile found", profile._id)
                resolve(profile)
              })
              .catch(err => reject(err))
          } else {
            errors.password = "Password incorrect"
            reject(errors)
          }
        })
      }
    })
  })

module.exports = loginTrainer
