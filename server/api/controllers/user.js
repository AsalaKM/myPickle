const express = require("express")

const router = express.Router()
const { getUserInfo } = require("../middlewares/user")

router.get("/:profileID", getUserInfo)

module.exports = router
