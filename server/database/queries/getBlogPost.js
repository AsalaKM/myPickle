// this query gets the individual blog post

// load the models
const Articles = require("../models/Articles")
const Profile = require("../models/Profile")

// load image function
const getImageNames = require("../queries/getImageNames")

const getBlogPost = async articleId => {
  const article = await Articles.findById(articleId)

  const profile = await Profile.aggregate([
    { $match: { _id: article.profile } },
    { $lookup: { from: "users", localField: "user", foreignField: "_id", as: "user" } },
  ])

  // check if profile image

  // insert file path of profile pictures folder
  const filePath = `${__dirname}/../../assets/profile-images`
  const getImageArr = await getImageNames(filePath)

  const profileImage = getImageArr.filter(
    imageName => imageName.split("-")[0] === article.profile.toString()
  )

  // const profileImage = getImageArr.forEach(imageName =>
  //   console.log("image", imageName.split("-")[0] === article.profile.toString())
  // )

  console.log("imageName", profileImage)

  // add user name and article to articleDetails
  const articleDetails = { article, author: profile[0].user[0].name, profileImage: profileImage[0] }

  return articleDetails
}

// get title, image, content and category from article
// use profileID to get the profile and lookup to get user's name

module.exports = getBlogPost
