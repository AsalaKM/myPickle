import React, { Component } from "react"
import Post from "./Posts"

import axios from "axios"

import { Box } from "../FindSupport/FindSupport.style"
class BrowseBlogPosts extends Component {
  state = {
    blogPosts: null,
    loaded: false,
  }

  componentDidMount() {
    // get profiles
    axios
      .get("/blog")
      .then(result => this.setState({ blogPosts: result.data, loaded: true }))
      .catch(err => console.log(err))
  }

  render() {
    const { loaded, blogPosts } = this.state
    if (!loaded) {
      return <div>loading...</div>
    } else {
      return (
        <Box>
          {blogPosts.map(post => {
            const { articleID, pictureURL, categories, title, content, profileID, userName } = post
            return (
              <Post
                key={Math.random()}
                articleID={articleID}
                pictureURL={pictureURL}
                categories={categories}
                title={title}
                content={content}
                profileID={profileID}
                userName={userName}
              />
            )
          })}
        </Box>
      )
    }
  }
}

export default BrowseBlogPosts
