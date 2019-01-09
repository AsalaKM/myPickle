import React, { Component } from "react"

import { ArticlePhoto } from "./BrowseBlogPosts.style"
import {
  Box,
  Container,
  DetailsOne,
  DetailsTwo,
  Name,
  List,
  Avatar,
  More,
  Form,
} from "../../Common/BrowseSections/CommonStyles"

import history from "../../../history"

class Post extends Component {
  render() {
    const { articleID, pictureURL, categories, title } = this.props

    const checkPicture = () =>
      pictureURL ? (
        <ArticlePhoto src={`/static/${pictureURL}`} />
      ) : (
        <ArticlePhoto src={require("../../../assets/images/logo_bw.jpg")} />
      )

    const viewArticle = e => {
      e.preventDefault()
      history.push(`profile/${articleID}`)
    }

    return (
      <Box>
        <Container>
          <Avatar>{checkPicture()}</Avatar>
          <DetailsOne>
            <Name>{title} </Name>
            {categories.map(item => {
              return <List key={Math.random()}>{item}</List>
            })}
          </DetailsOne>
          <DetailsTwo>
            <Form>
              <More onClick={viewArticle}>View Article</More>
            </Form>
          </DetailsTwo>
        </Container>
      </Box>
    )
  }
}
export default Post
