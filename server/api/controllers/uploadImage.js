const express = require("express")
const router = express.Router()

router.post("/", (req, res) => {
  const files = req.files

  const fileArr = Object.entries(files)
  console.log("FILE", fileArr)
  fileArr.forEach(file => {
    file[1].mv(`${__dirname}/../../assets/profile-images/${file[0]}-${file[1].name}`, err => {
      if (err) {
        return res.status(500).send(err)
      }
    })
  })
})

module.exports = router
