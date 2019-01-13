const express = require("express")
const { createArticle } = require("../middlewares/article/")
const passport = require("passport")

const router = express.Router()

router.post("/", passport.authenticate("jwt", { session: false }), createArticle)

module.exports = router
