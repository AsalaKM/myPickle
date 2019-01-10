import React, { Component } from "react"

import {
  Box,
  Container,
  DetailsOne,
  DetailsTwo,
  Link,
  ImageContainer,
  ArticlePhoto,
  Title,
  Author,
  List,
  Form,
} from "./BlogPost.style"

import history from "../../../history"

class Post extends Component {
  render() {
    const { articleID, pictureURL, categories, title, profileID, userName } = this.props

    // checks if article contains image
    const checkPicture = () =>
      pictureURL ? (
        <ArticlePhoto src={`/static/${pictureURL}`} />
      ) : (
        <ArticlePhoto src={require("../../../assets/images/logo_bw.jpg")} />
      )

    const viewArticle = e => {
      e.preventDefault()
      history.push(`blog/${articleID}`)
    }
    const handleAuthor = e => {
      e.preventDefault()
      history.push(`profile/${profileID}`)
    }

    return (
      <Box>
        <Container>
          <ImageContainer>{checkPicture()}</ImageContainer>
          <DetailsOne>
            <Title>{title}</Title>
            {categories.map(item => {
              return <List key={Math.random()}>{item}</List>
            })}
            <Author onClick={handleAuthor}>
              <span className="mp-black-color">By </span>
              {userName}
            </Author>
          </DetailsOne>
          <DetailsTwo>
            <Form>
              <Link onClick={viewArticle}>read more</Link>
            </Form>
          </DetailsTwo>
        </Container>
      </Box>
    )
  }
}
export default Post
