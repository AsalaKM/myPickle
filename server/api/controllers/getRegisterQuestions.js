const getRegisterQuestions = require("../../database/queries/getRegisterQuestions")
const mongoose = require("mongoose")

exports.get = (req, res) => {
  getRegisterQuestions()
    .then(console.log())
    .catch(err => console.log(err))
}
