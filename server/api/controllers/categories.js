const express = require("express")

const router = express.Router()
const { getAllCategories } = require("../middlewares/categorie")

router.get("/", getAllCategories)

module.exports = router
