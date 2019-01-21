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
  List,
  Arrow,
} from "./BlogPost.style"

import history from "../../../history"

class Post extends Component {
  render() {
    const { articleID, pictureURL, categories, title } = this.props

    // checks if article contains image
    const checkPicture = () =>
      pictureURL ? (
        <ArticlePhoto src={`${process.env.REACT_APP_HOST || ""}/static/${pictureURL}`} />
      ) : (
        <ArticlePhoto src={require("../../../assets/images/logo_bw.jpg")} />
      )

    const viewArticle = e => {
      e.preventDefault()
      history.push(`blog/${articleID}`)
    }

    return (
      <Box>
        <Link onClick={viewArticle}>
          <Container>
            <ImageContainer>{checkPicture()}</ImageContainer>
            <DetailsOne>
              <Title>{title}</Title>
              {categories.map(item => {
                return <List key={Math.random()}>{item}</List>
              })}
            </DetailsOne>
            <DetailsTwo>
              <Arrow src={require("../../../assets/images/arrow.svg")} alt="arrow" />
            </DetailsTwo>
          </Container>
        </Link>
      </Box>
    )
  }
}
export default Post
