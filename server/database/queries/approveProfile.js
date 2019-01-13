const Profile = require("../models/Profile")

const approveProfile = async id => {
  await Profile.findOneAndUpdate({ _id: id }, { approved: false })
}

module.exports = approveProfile
