const getCategories = require("../../../database/queries/getCategories.js")

const getAllCategories = async (req, res) => {
  const categories = await getCategories().catch(err => res.status(400).json({ error: err }))
  return res.status(200).json(categories)
}

module.exports = getAllCategories
