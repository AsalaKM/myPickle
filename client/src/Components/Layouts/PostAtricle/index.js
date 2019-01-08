import React, { Component } from "react"
import axios from "axios"
import ArticleForm from "./ArticleForm"

class PostArticle extends Component {
  state = {
    article: {
      title: "",
      categoriesSelected: [],
      text: "",
      image: null,
      profileId: "5c2b3694a87ed7376361bcf3",
    },
    categoryOptions: [],
    errors: [],
    hasError: false,
    uploading: false,
  }
  async componentDidMount() {
    try {
      const success = await axios.get("/categories")
      const type = Object.prototype.toString
        .call(success.data)
        .split(" ")[1]
        .replace("]", "")
      if (type === "Array") {
        let categoryOptions = success.data.map(item => {
          return { value: item._id, label: item.article_type }
        })
        if (categoryOptions.length > 0) {
          this.setState({ categoryOptions })
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  handleChange = event => {
    const { article } = this.state
    const type = Object.prototype.toString
      .call(event.target)
      .split(" ")[1]
      .replace("]", "")
    if (type !== "Undefined") {
      const { name, value } = event.target
      this.setState({ article: { ...article, [name]: value } })
    } else {
      const newValue = event
      const { article } = this.state
      this.setState({ article: { ...article, categoriesSelected: newValue } })
    }
  }
  imageUpload = file => {
    const { article } = this.state
    const newImage = file.target.files[0]
    this.setState({ article: { ...article, image: newImage }, uploading: true })
  }
  handleSubmit = async e => {
    e.preventDefault()
    const { article } = this.state
    const formData = new FormData()
    for (let key in article) {
      if (key === "categoriesSelected") {
        let obj = []
        let categoriesSelected = article[key].map(item => {
          return item.value
        })
        formData.append(key, categoriesSelected)
        console.log(formData.get(key))
      } else {
        formData.append(key, article[key])
        console.log(formData.get(key))
      }
    }
    try {
      const success = await axios.post("/articles/", formData)
      console.log(success)
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    const data = this.state

    return (
      <React.Fragment>
        <ArticleForm
          data={data}
          handleChange={this.handleChange}
          imageUpload={this.imageUpload}
          handleSubmit={this.handleSubmit}
        />
      </React.Fragment>
    )
  }
}

export default PostArticle
