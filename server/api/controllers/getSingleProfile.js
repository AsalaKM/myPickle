const express = require("express")

const router = express.Router()
const getSingleProfile = require("../../database/queries/getSingleProfile")

router.get("/:id", (req, res) => {
  console.log("req.params.id", req.params.id)
  getSingleProfile(req.params.id)
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => res.status(401).send(err))
})
module.exports = router
