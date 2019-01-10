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
    const { articleID, pictureURL, categories, title, profileID } = this.props

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

    return (
      <Box>
        <Container>
          <ImageContainer>{checkPicture()}</ImageContainer>
          <DetailsOne>
            <Title>{title}</Title>
            {categories.map(item => {
              return <List key={Math.random()}>{item}</List>
            })}
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
