import FormValidation from "./FormVaidation"
const validateSelectedCategoery = arr => {
  if (arr.length === 0) {
    return false
  }
  return true
}
const validateImage = image => {
  if (!image) {
    return false
  }
  return true
}
const formRules = new FormValidation([
  { field: "title", method: "isEmpty", validWhen: false, message: "Title is required" },
  {
    field: "categoriesSelected",
    method: validateSelectedCategoery,
    validWhen: true,
    message: "Article category is required",
  },
  { field: "text", method: "isEmpty", validWhen: false, message: "Text is required" },
  { field: "image", method: validateImage, validWhen: true, message: "Image is required" },
])

export default formRules
