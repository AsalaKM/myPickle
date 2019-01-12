import React from "react"
import styled from "styled-components"
import { Wrapper } from "../../Generic-helpers/layoutpack"
import img from "../../../assets/pickle_logo.svg"
import { Link } from "react-router-dom"
import { sizes } from "../../Generic-helpers/variables"

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

const MenuLink = styled(Link)`
  width: 100%;
  color: var(--black);
  background-color: var(--whiet);
  padding: 5px;
  font-size: ${sizes.xl};
  text-decoration: none;
  &:active {
    color: var(--primary);
  }
  &.active {
    color: var(--primary);
  }
`
const MenuItem = styled.li`
  width: 90%;
  border-top: 2px solid #c4c4c4;
  list-style: none;
  padding: 10px 0;
  &.sub-menu-dropdown {
    border-top: none !important;
  }
`
const MenuList = styled.ul`
  width: 100%;
`
const MenuSlider = styled.div`
  display: inline-block;
  &.show {
    transform: translate3d(0vw, 0, 0);
    overflow: hidden;
  }
  &.hide {
    transform: translate3d(-100vw, 0, 0);
  }
  transition: transform 0.5s ease;
  width: 100vw;
  height: 100vh;
  background-color: hsla(0, 0%, 100%, 1);
  position: fixed;
  top: 50px;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .nav-index-offset {
    position: absolute;
    right: 40px;
    top: 0;
    width: ${sizes.xxxxl};
    height: ${sizes.xxxxl};
    fill: var(--primary);
    cursor: pointer;
  }
`

export { BurgerButton, Logo, LogoBox, ColoredWrapper, MenuLink, MenuSlider, MenuItem, MenuList }
