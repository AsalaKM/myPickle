import React, { Component } from "react"
import axios from "axios"
// import the form compenent
import ArticleForm from "./ArticleForm"
import formRules from "./FormRules"

import swal from "sweetalert"

class PostArticle extends Component {
  constructor() {
    super()

    this.validator = formRules

    this.state = {
      article: {
        title: "",
        categoriesSelected: [],
        text: "",
        image: null,
        profileId: "",
      },
      categoryOptions: [],
      validation: this.validator.valid(),
      uploading: false,
    }
    this.submitted = false
  }

  async componentDidMount() {
    const { profileId, history } = this.props
    const { article } = this.state
    try {
      const success = await axios.get(`${process.env.REACT_APP_HOST || ""}/categories`)
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
      this.setState({ article: { ...article, profileId } })
    } catch (error) {
      history.push("/500")
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
    const validation = this.validator.validate(this.state.article)
    this.setState({ validation })
    this.submitted = true
    if (validation.isValid) {
      const { article } = this.state
      const { history } = this.props
      const formData = new FormData()
      for (let key in article) {
        if (key === "categoriesSelected") {
          let categoriesSelected = article[key].map(item => {
            return item.value
          })
          formData.append(key, categoriesSelected)
        } else {
          formData.append(key, article[key])
        }
      }
      try {
        const success = await axios.post(`${process.env.REACT_APP_HOST || ""}/articles/`, formData)
        const { url } = success.data.createdArticele
        swal(
          "Great!",
          `Article ${success.data.createdArticele.title} created Successfully!`,
          "success"
        ).then(() => history.push(url))
      } catch (error) {
        swal({
          icon: "error",
          title: `Oops!! something happened, ${error.msg} `,
        })
      }
    } else {
      swal({
        icon: "error",
        title: "Oops!! Please complete the article form",
      })
    }
  }
  render() {
    let validation = this.submitted
      ? this.validator.validate(this.state.article)
      : this.state.validation

    const data = this.state

    return (
      <React.Fragment>
        <ArticleForm
          data={data}
          handleChange={this.handleChange}
          imageUpload={this.imageUpload}
          handleSubmit={this.handleSubmit}
          validation={validation}
        />
      </React.Fragment>
    )
  }
}

export default PostArticle
