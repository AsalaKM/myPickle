const express = require("express")

const router = express.Router()

const registerController = require("./registerController")
const registerUserController = require("./registerUserController")
const uploadImage = require("./uploadImage")

/* GET home page. */
router.get("/", (req, res, next) => {
  res.send({ title: "Express" })
})

router.use("/get-register-questions", registerController)

router.use("/register-user", registerUserController)
router.use("/upload-image", uploadImage)

module.exports = router
