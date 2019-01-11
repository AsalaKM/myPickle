import React, { Component } from "react"

import {
  Box,
  Container,
  Article,
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
    const { articleID, pictureURL, categories, title, content, profileID, userName } = this.props
    console.log(content)
    // checks if article contains image
    const checkPicture = () =>
      pictureURL ? (
        <ArticlePhoto src={`/static/${pictureURL}`} />
      ) : (
        <ArticlePhoto src={require("../../../assets/images/logo_bw.jpg")} />
      )
    // shortens article content
    const createTeaser = () => {
      const teaserLength = 100
      if (content.length > teaserLength) {
        let newContent = content.substring(0, teaserLength)
        return newContent
      } else {
        return content
      }
    }

    // const viewArticle = e => {
    //   e.preventDefault()
    //   history.push(`blog/${articleID}`)
    // }
    const handleAuthor = e => {
      e.preventDefault()
      history.push(`profile/${profileID}`)
    }

    return (
      <Box>
        <Container>
          <Wrapper>
            <ImageContainer>{checkPicture()}</ImageContainer>
            <Content>
              <Title>{title}</Title>
              <Article to={{ pathname: `blog/${articleID}` }}>
                <TextContent>
                  {createTeaser() + " ..."}
                  <span className="mp-primary-color fw3">read more</span>
                </TextContent>
              </Article>
              {categories.map(item => {
                return <List key={Math.random()}>{item}</List>
              })}

              <Author onClick={handleAuthor}>
                <span className="mp-black-color">By </span>
                {userName}
              </Author>
            </Content>
          </Wrapper>
        </Container>
      </Box>
    )
  }
}
export default Post
