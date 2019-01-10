const mongoose = require("mongoose")

const Schema = mongoose.Schema

const articleSchema = new Schema({
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
  category: [
    {
      type: Schema.Types.ObjectId,
      ref: "categories",
      required: true,
    },
  ],
})

module.exports = Article = mongoose.model("articles", articleSchema)
