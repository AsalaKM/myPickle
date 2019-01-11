import React from "react"
import styled from "styled-components"
import { sizes } from "../../Generic-helpers//variables"
import { ReactComponent as Close } from "../../../assets//images/baseline-close-24px.svg"

const MenuItem = styled.div`
  width: 75%;
  color: var(--black);
  background-color: var(--whiet);
  padding: 5px;
  border-top: 2px solid #c4c4c4;
  font-size: ${sizes.xl};
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
    right: 0;
    top: 0;
    width: ${sizes.xxxl};
    height: ${sizes.xxxl};
    fill: var(--primary);
  }
`
const NavMenu = props => {
  const { toggle } = props
  return (
    <MenuSlider className={toggle ? "show" : "hide"}>
      {toggle ? <Close className="nav-index-offset" onMouseDown={props.handleMouseDown} /> : null}
      <MenuItem>Home</MenuItem>
      <MenuItem>Find Article</MenuItem>
      <MenuItem>Find Therapiest</MenuItem>
      <MenuItem>Ismail</MenuItem>
      <MenuItem>Logout</MenuItem>
    </MenuSlider>
  )
}
export { NavMenu }
