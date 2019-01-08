const walker = require("async-walker")

const getImageNames = async filePath => {
  const getNames = await walker(`${filePath}`).then(files => {
    imgArr = []
    files.forEach(img => {
      //get image name which is always the last element of the img.split array
      imgArr.push(img.split("/").pop())
    })
    return imgArr
  })
  return getNames
}

module.exports = getImageNames
