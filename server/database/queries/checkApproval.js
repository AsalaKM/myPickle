const Profile = require("../models/Profile")

// checks approved true or false
const checkApproval = async id => {
  const profile = await Profile.find({ _id: id })
  const approved = profile[0].approved
  return approved
}

module.exports = checkApproval
