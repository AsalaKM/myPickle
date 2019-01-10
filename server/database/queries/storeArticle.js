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
    const { _id } = result
    const createdArticele = {
      title: result.title,
      categoriesSelected: result.category,
      text: result.content,
      _id,
      request: { type: "GET", url: `http://localhost:3001/article/${_id}` },
    }
    const response = { msg: "create article successfully", createdArticele }
    console.log("responseeee", response)

    return response
  })

  return Store
}

module.exports = storeArticle
