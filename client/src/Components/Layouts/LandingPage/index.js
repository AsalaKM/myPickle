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
    <Heading>MyPickle</Heading>
    <Paragraph>We’ll find support for you.</Paragraph>
    <TextLink to="/about">Find out more about My Pickle</TextLink>
    <ButtonWrapper>
      <Button to="/find-support">Find Support</Button>
      <Button to="/register">Offer Support</Button>
    </ButtonWrapper>
  </Container>
)

export default LandingPage
