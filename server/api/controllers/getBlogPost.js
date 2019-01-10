const express = require("express")

const router = express.Router()
const getBlogPost = require("../../database/queries/getBlogPost")

router.get("/", (req, res) => {
  getBlogPost("5c37420f4d651e0ee1efddbf").then(result =>
    res
      .status(200)
      .send(result)
      .catch(err => res.status(401).err(err))
  )
})

module.exports = router
