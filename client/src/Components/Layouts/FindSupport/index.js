import React, { Component } from "react"
import Profile from "../BrowseProfiles/Profiles"
import BlogPost from "./BlogPost"

import axios from "axios"

import { ColumnContainer, ColumnOne, ColumnTwo, Heading } from "./FindSupport.style"

class BrowseProfiles extends Component {
  state = {
    profiles: null,
    blogPosts: null,
    loaded: false,
  }

  componentDidMount() {
    // get profiles
    const getProfiles = () => axios.get("/profiles")
    // get blogPosts
    const getBlogPosts = () => axios.get("/blog")

    axios
      .all([getProfiles(), getBlogPosts()])
      .then(result =>
        this.setState({ profiles: result[0].data, blogPosts: result[1].data, loaded: true })
      )
      .catch(err => console.log(err))
  }

  render() {
    const { loaded, profiles, blogPosts } = this.state

    if (!loaded) {
      return <div>loading...</div>
    } else {
      return (
        <React.Fragment>
          <ColumnContainer>
            <ColumnOne>
              <Heading>Support Providers</Heading>
            </ColumnOne>
            <ColumnTwo>
              <Heading>See All</Heading>
            </ColumnTwo>
          </ColumnContainer>
          {profiles
            .filter((e, index) => index < 4)
            .map(profile => {
              const { organisation, wellnessType, avatarURL, profileID } = profile
              return (
                <Profile
                  key={Math.random()}
                  organisation={organisation}
                  wellnessType={wellnessType}
                  avatar={avatarURL}
                  profileID={profileID}
                />
              )
            })}
          <ColumnContainer>
            <ColumnOne>
              <Heading>Blog Posts</Heading>
            </ColumnOne>
            <ColumnTwo>
              <Heading>See All</Heading>
            </ColumnTwo>
          </ColumnContainer>
          {blogPosts
            .filter((e, index) => index < 4)
            .map(post => {
              const {
                articleID,
                pictureURL,
                categories,
                title,
                content,
                profileID,
                userName,
              } = post
              return (
                <BlogPost
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
        </React.Fragment>
      )
    }
  }
}

export default BrowseProfiles
