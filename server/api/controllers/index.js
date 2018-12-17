const express = require("express")

const router = express.Router()

const registerController = require("./registerController")

/* GET home page. */
router.get("/", (req, res, next) => {
  res.send({ title: "Express" })
})

router.use("/get-register-questions", registerController)

module.exports = router
