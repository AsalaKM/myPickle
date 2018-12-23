const mongoose = require("mongoose")
const Schema = mongoose.Schema

const categorySchema = Schema({
  article_type: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
  },
})

module.exports = Category = mongoose.model("categories", categorySchema)
