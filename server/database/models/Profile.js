const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ProfileSchema = new Schema({
  supportType: {
    // connect each profile to the type of support (e.g. therapist)
    type: Schema.Types.ObjectId, //FK ref the id in the SupportType model
    ref: "supportTypes", // this says which model to go into
  },
  user: {
    // connect each profile to the exact user
    type: Schema.Types.ObjectId, //FK ref the id in the User model
    ref: "users", // this says which model to go into
  },
  approved: {
    type: Boolean,
    default: false,
  },
})

module.exports = Profile = mongoose.model("profiles", ProfileSchema)
