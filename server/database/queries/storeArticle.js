const Article = require("../../database/models/Articles")

const storeArticle = async articleObj => {
  const { title, category, content, image, profile } = articleObj
  const article = await new Article({
    title,
    category,
    content,
    image,
    profile,
  })

  const Store = await article.save().then(result => {
    const { title, categoriesSelected, text, _id } = result
    const response = {
      msg: "create article successfully",
      createdArticele: {
        title,
        categoriesSelected,
        text,
        _id,
        request: { type: "GET", url: `http://localhost:3001/article/${_id}` },
      },
    }
    return response
  })
  return Store
}

module.exports = storeArticle
