// creates article objects for the browse blog posts component
// load mongo models
const Article = require("../models/Articles")
const Category = require("../models/Category")
// load queries
const getImageNames = require("./getImageNames")
// start function
const getArticles = async () => {
  // get all articles
  const articles = await Article.find({})
  const articlesArr = []

  // gets all category-types
  const getCategory = async arr => {
    const articleTypes = []
    for (let i = 0; i < arr.length; i++) {
      const articleType = await Category.findById(arr[i])
      articleTypes.push(articleType.article_type)
    }
    return articleTypes
  }
  // loop over articles array
  for (let i = 0; i < articles.length; i++) {
    // create obj for each article
    const articleObj = {}

    // insert id
    articleObj.articleID = articles[i]._id
    // insert title
    articleObj.title = articles[i].title
    // insert imageURL
    articleObj.pictureURL = articles[i].image
    // insert categories
    articleObj.categories = await getCategory(articles[i].category)

    articlesArr.push(articleObj)
  }
  return articlesArr
}

module.exports = getArticles
