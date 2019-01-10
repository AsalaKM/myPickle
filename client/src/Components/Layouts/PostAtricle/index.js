import React, { Component } from "react"
import axios from "axios"
// import the form compenent
import ArticleForm from "./ArticleForm"

import swal from "sweetalert"

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
          console.log(item)

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
    const { history } = this.props
    const formData = new FormData()
    for (let key in article) {
      if (key === "categoriesSelected") {
        let categoriesSelected = article[key].map(item => {
          console.log("heloooooo", item)

          return item.value
        })
        formData.append(key, categoriesSelected)
      } else {
        formData.append(key, article[key])
      }
    }
    try {
      const success = await axios.post("/articles/", formData)
      swal(
        "Great!",
        `Article ${success.data.createdArticele.title} Created Successfully!`,
        "success"
      ).then(() => history.push("/"))
    } catch (error) {
      swal({
        icon: "error",
        title: "Oops!! something happen, sorry",
      })
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
