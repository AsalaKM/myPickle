const Category = require("../../database/models/Category")

const findCategories = async () => {
  const result = await Category.find()
  return result
}
module.exports = findCategories
