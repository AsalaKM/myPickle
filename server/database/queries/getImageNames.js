var walker = require("async-walker")

const getImageNames = async filePath => {
  const getNames = await walker(`${filePath}`).then(files => {
    imgArr = []
    files.forEach(img => {
      imgArr.push(img.split("/")[11])
    })
    return imgArr
  })
  return getNames
}

module.exports = getImageNames
