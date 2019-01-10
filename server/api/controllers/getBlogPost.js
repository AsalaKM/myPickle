const express = require("express")

const router = express.Router()
const getBlogPost = require("../../database/queries/getBlogPost")

router.get("/", (req, res) => {
  const articleId = req.originalUrl.split("/")[2]
  getBlogPost(articleId)
    .then(result => res.status(200).send(result))
    .catch(err => res.status(401).err(err))
})

module.exports = router
