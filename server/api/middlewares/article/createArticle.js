const storeArticle = require("../../../database/queries/storeArticle")

const createArticle = async (req, res) => {
  console.log("reqqqq", req.body)

  const { title, categoriesSelected, text, profileId } = req.body
  const { image } = req.files
  const fileType = image.mimetype
  if (fileType === "image/jpeg" || fileType === "image/png" || fileType === "image/gif") {
    try {
      const date = new Date().toISOString()
      const uploadPath = `${__dirname}/../../../assets/articleupload/'${date}-${image.name}`
      await image.mv(uploadPath)

      const article = {
        title,
        category: [categoriesSelected],
        content: text,
        image: uploadPath,
        profile: profileId,
      }
      const newArticle = await storeArticle(article)
      return res.status(201).json(newArticle)
    } catch (error) {
      return res.status(400).json({ error })
    }
  }
  return res.status(406).json({ msg: "the file you uploaded is not image" })
}
module.exports = createArticle
