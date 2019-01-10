const mongoose = require("mongoose")
const Schema = mongoose.Schema

const articleSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  profile: {
    type: Schema.Types.ObjectId,
    ref: "profiles",
  },
  category: {
    type: String,
    ref: "categories",
    required: true,
  },
})

module.exports = Article = mongoose.model("articles", articleSchema)
