import React, { Component } from "react"

import {
  Box,
  Container,
  Link,
  Wrapper,
  ImageContainer,
  ArticlePhoto,
  Content,
  Title,
  TextContent,
  Author,
  List,
} from "./BrowseBlogPosts.style"

import history from "../../../history"

class Post extends Component {
  render() {
    const { articleID, pictureURL, categories, title, content } = this.props

    const checkPicture = () =>
      pictureURL ? (
        <ArticlePhoto src={`/static/${pictureURL}`} />
      ) : (
        <ArticlePhoto src={require("../../../assets/images/logo_bw.jpg")} />
      )

    const createTeaser = () => {
      const teaserLength = 100
      if (content.length > teaserLength) {
        let newContent = content.substring(0, teaserLength)
        return newContent
      }
    }

    const viewArticle = e => {
      e.preventDefault()
      history.push(`profile/${articleID}`)
    }

    return (
      <Box>
        <Container>
          <Link onClick={viewArticle}>
            <Wrapper>
              <ImageContainer>{checkPicture()}</ImageContainer>
              <Content>
                <Title>{title}</Title>
                <TextContent>{createTeaser() + " ... read more"}</TextContent>
                {categories.map(item => {
                  return <List key={Math.random()}>{item}</List>
                })}
                <Author>By ... </Author>
              </Content>
            </Wrapper>
          </Link>
        </Container>
      </Box>
    )
  }
}
export default Post
