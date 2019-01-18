import React, { Component } from "react"
import Profile from "../BrowseProfiles/Profiles"
import BlogPost from "./BlogPost"

import axios from "axios"

import {
  ColumnContainer,
  ColumnOne,
  ColumnTwo,
  Heading,
  AllButton,
  Container,
  Box,
} from "./FindSupport.style"

class BrowseProfiles extends Component {
  state = {
    profiles: null,
    blogPosts: null,
    loaded: false,
  }

  componentDidMount() {
    // get profiles
    const getProfiles = () => axios.get(`${process.env.HOST || ""}/profiles`)
    // get blogPosts
    const getBlogPosts = () => axios.get(`${process.env.HOST || ""}/blog`)

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
        <Box>
          <Container>
            <ColumnContainer>
              <ColumnOne>
                <Heading>Support Providers</Heading>
              </ColumnOne>
              <ColumnTwo>
                <AllButton to={"/profiles"}>See All</AllButton>
              </ColumnTwo>
            </ColumnContainer>
          </Container>
          {profiles
            .filter((e, index) => index < 4)
            .map(profile => {
              console.log(profile)

              const { organisation, wellnessType, avatarURL, profileID, approved } = profile
              return (
                <div>
                  {approved && (
                    <Profile
                      key={Math.random()}
                      organisation={organisation}
                      wellnessType={wellnessType}
                      avatar={avatarURL}
                      profileID={profileID}
                    />
                  )}
                </div>
              )
            })}
          <Container>
            <ColumnContainer>
              <ColumnOne>
                <Heading>Blog Posts</Heading>
              </ColumnOne>
              <ColumnTwo>
                <AllButton to={"/blog"}>See All</AllButton>
              </ColumnTwo>
            </ColumnContainer>
          </Container>
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
        </Box>
      )
    }
  }
}

export default BrowseProfiles
