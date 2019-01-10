import React, { Component } from "react"
import axios from "axios"

class BlogPost extends Component {
  state = {
    article: null,
    author: null,
    profileImage: null,
    loaded: false,
  }

  componentDidMount() {
    const pathName = window.location.pathname
    const articleId = pathName.split("/")[2]

    console.log("ID", articleId)
    axios
      .get(`/get-blog-post/${articleId}`)
      .then(articleDetails =>
        this.setState({
          article: articleDetails.data.article,
          author: articleDetails.data.author,
          profileImage: articleDetails.data.profileImage,
          loaded: true,
        })
      )
      .catch(err => console.log(err))
  }

  render() {
    // const { title } = this.props
    const { article, author, profileImage, loaded } = this.state

    if (!loaded) {
      return <div>loading...</div>
    }

    return (
      <React.Fragment>
        <h1>{article.title}</h1>
        <div>{article.image && article.image}</div>
        <div>
          <img src={profileImage && profileImage} alt="profile" />
          <p>{author}</p>
          <p>Link to view profile</p>
        </div>
        <div>
          <p>{article.content}</p>
        </div>
        <div>FOOTER TO SHOW BLOG POSTS OR PROFILES</div>
      </React.Fragment>
    )
  }
}
export default BlogPost
