const Profile = require("../models/Profile")

const approveProfile = async id => {
  await Profile.findOneAndUpdate({ _id: id }, { approved: true })
}

module.exports = approveProfile
