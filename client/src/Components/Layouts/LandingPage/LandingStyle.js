import styled from "styled-components"
import { Link } from "react-router-dom"
import img from "../../../assets/images/logo.jpeg"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  height: 100%;
`

const Logo = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 55px;
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
  margin-top: 20px;
  justify-content: space-between;
`

const Button = styled(Link).attrs({
  className: "mp-black-color mp-bg-white mp-b--primary-color",
})`
  display: flex
  line-height: 35px;
  margin: 5px 5px;
  border-radius: 5px;
  border-style: solid;
  border-width:2px;
  text-decoration: none;
  padding: 12px;
  font-weight: 100;
  :hover {
    background-color: var(--primary);
    color: var(--white);
  }
`

export { TextLink, Paragraph, Logo, Heading, Container, ButtonWrapper, Button }
