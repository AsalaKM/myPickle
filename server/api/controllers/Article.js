const express = require("express")
const { createArticle } = require("../middlewares/article/")

const router = express.Router()

router.post("/", createArticle)

module.exports = router
