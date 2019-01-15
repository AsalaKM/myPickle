import styled from "styled-components"
import { Link } from "react-router-dom"
import img from "../../../assets/images/logo.jpeg"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  height: 100%;
  justify-content: center;
  padding: 1rem;
  padding-top: 2rem;
`

const Logo = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100px;
  height: 160px;
  background: url(${img}) no-repeat;
  background-size: cover;
`

const Heading = styled.h2.attrs({
  className: "mp-black-color",
})`
  font-weight: 100;
  margin-top: 10px;
`

const Paragraph = styled.p.attrs({
  className: "mp-black-color",
})`
  text-align: center;
  font-weight: 80;
`

const TextLink = styled(Link).attrs({
  className: "mp-primary-color",
})`
  text-align: center;
  text-decoration: none;
`

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: center;
`

const Button = styled(Link).attrs({
  className: "mp-black-color mp-bg-lightwhite mp-b--primary-color",
})`
  display: flex;
  height: 4rem;
  margin: 0.25rem;
  border-radius: 0.5rem;
  border-style: solid;
  border-width: 2px;
  text-decoration: none;
  padding: 12px;
  min-width: 40%;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: var(--primary);
    color: var(--white);
  }
`

export { TextLink, Paragraph, Logo, Heading, Container, ButtonWrapper, Button }
