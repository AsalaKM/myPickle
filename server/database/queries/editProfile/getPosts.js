// creates article objects for the browse blog posts component
// load mongo models
const Article = require("../models/Articles")
const Category = require("../models/Category")

const getArticles = async () => {
  // get all articles
  const articles = await Article.find({})
  console.log(articles)
}
