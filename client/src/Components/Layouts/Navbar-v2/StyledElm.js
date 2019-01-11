import React from "react"
import styled from "styled-components"
import { Wrapper } from "../../Generic-helpers/layoutpack"
import img from "../../../assets/pickle_logo.svg"

const Line = styled.span`
  width: 35px;
  height: 5px;
  background-color: #656565;
  margin-top: 4px;
  &:first-child {
    margin-top: 0 !important;
  }
`
const Button = styled.div`
  background: var(--white);
  radius: 3px;
  size: 14px;
  color: #656565;
  border: var(--black);
  padding: 0 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:hover {
    span {
      background-color: #96d9ff;
    }
    cursor: pointer;
    border-color: #003557;
    transform: scale(1.1, 1.1);
  }
  &:active {
    border-color: #003557;
    background-color: #fff;
  }
`
const BurgerButton = props => {
  return (
    <Button onMouseDown={props.toggleMenu}>
      <Line />
      <Line />
      <Line />
    </Button>
  )
}
const Logo = styled.img.attrs({ src: img })`
  display: flex;
  width: 20%;
  height: 75px;
`
const LogoBox = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
`
const ColoredWrapper = styled(Wrapper)`
  background-color: ${props => props.background || "var(--white)"};
  box-shadow: ${props => props.shadow || ""};
  &.active {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5000;
  }
`

export { BurgerButton, Logo, LogoBox, ColoredWrapper }
