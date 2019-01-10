const Article = require("../../database/models/Articles")

const storeArticle = async articleObj => {
  const { _id, title, category, content, image, profile } = articleObj
  const article = await new Article({
    _id,
    title,
    category,
    content,
    image,
    profile,
  })

  const Store = await article.save().then(result => {
    const createdArticele = {
      title: result.title,
      categoriesSelected: result.category,
      text: result.content,
      _id: result._id,
      request: { type: "GET", url: `http://localhost:3001/article/${_id}` },
    }
    const response = { msg: "create article successfully", createdArticele }
    return response
  })
  return Store
}

module.exports = storeArticle
