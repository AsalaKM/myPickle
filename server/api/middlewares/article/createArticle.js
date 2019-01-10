const mongoose = require("mongoose")
const storeArticle = require("../../../database/queries/storeArticle")

const createArticle = async (req, res) => {
  const { title, categoriesSelected, text, profileId } = req.body
  const { image } = req.files
  const fileType = image.mimetype
  if (fileType === "image/jpeg" || fileType === "image/png" || fileType === "image/gif") {
    try {
      // create new id for Article
      const id = mongoose.Types.ObjectId()
      // create a path for image
      const uploadPath = `${__dirname}/../../../assets/articleupload/${id}-${image.name}`
      // sotre image in the spacific path
      await image.mv(uploadPath)
      // declare new article obj
      const article = {
        _id: id,
        title,
        category: categoriesSelected,
        content: text,
        image: uploadPath,
        profile: profileId,
      }
      // query for store article in DB
      const newArticle = await storeArticle(article)
      return res.status(201).json(newArticle)
    } catch (error) {
      return res.status(400).json({ error })
    }
  }
  return res.status(406).json({ msg: "the file you uploaded is not image" })
}
module.exports = createArticle
