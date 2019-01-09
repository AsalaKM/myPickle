// renders landing page

import React from "react"
import {
  Heading,
  Container,
  Logo,
  Paragraph,
  TextLink,
  ButtonWrapper,
  Button,
} from "./LandingStyle"

const LandingPage = () => (
  <Container>
    <Logo />
    <Heading>My Pickle</Heading>
    <Paragraph>
      My Pickle brings together therapists and those who want their help. Find therapists, read
      articles written by them, and get the support you need.
    </Paragraph>
    <TextLink to="/">Find out more about My Pickle</TextLink>
    <ButtonWrapper>
      <Button to="/">Find Support</Button>
      <Button to="/register">Offer Support</Button>
    </ButtonWrapper>
  </Container>
)

export default LandingPage
