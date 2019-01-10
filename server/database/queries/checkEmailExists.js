const User = require("../models/User")

const checkEmailExists = email =>
  new Promise((resolve, reject) => {
    let errors = {}

    User.findOne({ email })
      .then(user => {
        if (user) {
          console.log("query", user)
          errors.email = "Email already exists"
          reject(errors)
        } else {
          resolve("")
        }
      })
      .catch(err => reject(err))
  })

module.exports = checkEmailExists
