const Article = require("../../database/models/Articles")

const storeArticle = async articleObj => {
  // Get data from the request
  const { _id, title, category, content, image, profile } = articleObj
  // create new document
  const article = await new Article({
    _id,
    title,
    category,
    content,
    image,
    profile,
  })
  // save docuemnt in the database
  const Store = await article.save().then(result => {
    // return data and path to view article
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
