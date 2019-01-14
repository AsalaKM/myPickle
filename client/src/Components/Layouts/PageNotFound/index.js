import React from "react"
import { Container, Wrapper } from "../../Generic-helpers/layoutpack"
import { Error, Title, Massege } from "./Elm.style"
import { ReactComponent as Logo } from "../../../assets/pickle_logo.svg"

const Error404 = () => (
  <Wrapper>
    <Container>
      <Error>
        <Logo className="error-logo" />
        <Title>
          4<span>0</span>4
        </Title>
        <Massege>This is not the page you are looking for</Massege>
      </Error>
    </Container>
  </Wrapper>
)
const Error500 = () => (
  <Wrapper>
    <Container>
      <Error>
        <Logo className="error-logo" />
        <Title>
          Oops!! <span>5</span>00
        </Title>
        <Massege>look like somthing went wrong</Massege>
      </Error>
    </Container>
  </Wrapper>
)
export { Error404, Error500 }
