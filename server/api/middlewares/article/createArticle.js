const mongoose = require("mongoose")
const storeArticle = require("../../../database/queries/storeArticle")

const createArticle = async (req, res) => {
  const { title, categoriesSelected, text, profileId } = req.body
  const { image } = req.files
  const fileType = image.mimetype
  if (fileType === "image/jpeg" || fileType === "image/png" || fileType === "image/gif") {
    try {
      const id = mongoose.Types.ObjectId()
      console.log(id)
      const uploadPath = `${__dirname}/../../../assets/articleupload/${id}-${image.name}`
      console.log(uploadPath)
      await image.mv(uploadPath)

      const article = {
        _id: id,
        title,
        category: categoriesSelected,
        content: text,
        image: uploadPath,
        profile: profileId,
      }
      console.log(id)

      const newArticle = await storeArticle(article)
      return res.status(201).json(newArticle)
    } catch (error) {
      return res.status(400).json({ error })
    }
  }
  return res.status(406).json({ msg: "the file you uploaded is not image" })
}
module.exports = createArticle
