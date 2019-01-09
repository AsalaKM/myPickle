const mongoose = require("mongoose")
const Schema = mongoose.Schema

const SupportTypeSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
})

module.exports = SupportType = mongoose.model("supportTypes", SupportTypeSchema)
