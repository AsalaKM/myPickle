const Category = require("../../database/models/Category")
// find all category in the DB
const findCategories = async () => {
  const result = await Category.find()
  return result
}
module.exports = findCategories
