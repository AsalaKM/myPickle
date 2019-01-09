const express = require("express")
const router = express.Router()
const getArticles = require("../../database/queries/getArticles")

router.get("/", (req, res) => {
  getArticles()
    .then(result => res.status(200).send(result))
    .catch(err => res.status(401).err(err))
})
module.exports = router
