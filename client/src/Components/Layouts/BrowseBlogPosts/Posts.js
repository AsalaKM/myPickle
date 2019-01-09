import React, { Component } from "react"

import {
  Box,
  Container,
  ProfilePhoto,
  DetailsOne,
  DetailsTwo,
  Name,
  WellnessList,
  Avatar,
  More,
  Form,
} from "./BrowseBlogPosts.style"

import history from "../../../history"

class Post extends Component {
  render() {
    const { articleID, pictureURL, categories, title } = this.props

    const checkPicture = () =>
      pictureURL ? (
        <ProfilePhoto src={`/static/${pictureURL}`} />
      ) : (
        <ProfilePhoto src={require("../../../assets/images/logo_bw.jpg")} />
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
              return <WellnessList key={Math.random()}>{item}</WellnessList>
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
