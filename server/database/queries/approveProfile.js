const Profile = require("../models/Profile")

// checks approved true or false and sets value to opposite
const approveProfile = async (id, bool) => {
  await Profile.findOneAndUpdate({ _id: id }, { approved: (bool = !bool) })
}

module.exports = approveProfile
