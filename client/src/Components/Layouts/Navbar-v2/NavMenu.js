import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { sizes } from "../../Generic-helpers/variables"
import { ReactComponent as Close } from "../../../assets//images/baseline-close-24px.svg"

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
const DropDownList = props => {
  return (
    <MenuList className="sub-menu">
      <MenuItem className="sub-menu-dropdown">
        <MenuLink to="/dashboard" onClick={props.handleMouseDown}>
          My dashboard
        </MenuLink>
      </MenuItem>
      <MenuItem className="sub-menu-dropdown">
        <MenuLink to={`/profile/${props.profileId}`} onClick={props.handleMouseDown}>
          View Profile{" "}
        </MenuLink>
      </MenuItem>
      <MenuItem className="sub-menu-dropdown">
        <MenuLink to="/edit-profile" onClick={props.handleMouseDown}>
          Edit Profile
        </MenuLink>
      </MenuItem>
      <MenuItem className="sub-menu-dropdown">
        <MenuLink to="/postarticles" onClick={props.handleMouseDown}>
          Create Article
        </MenuLink>
      </MenuItem>
    </MenuList>
  )
}
const NavMenu = props => {
  const { toggle, userName } = props
  const { user, isAuthenticated } = props.userAuthData
  return (
    <MenuSlider className={toggle ? "show" : "hide"}>
      {toggle ? <Close className="nav-index-offset" onMouseDown={props.handleMouseDown} /> : null}
      <MenuList>
        <MenuItem>
          <MenuLink to="/" onClick={props.handleMouseDown}>
            Home
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/blog" onClick={props.handleMouseDown}>
            Find Article
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/profiles" onClick={props.handleMouseDown}>
            Find Therapiest
          </MenuLink>
        </MenuItem>
        {isAuthenticated ? (
          <MenuItem>
            {" "}
            <MenuLink to={`/profile/${user}`} onClick={props.handleMouseDown}>
              {userName}
            </MenuLink>
            <DropDownList handleMouseDown={props.handleMouseDown} profileId={user} />
          </MenuItem>
        ) : (
          <MenuItem>
            <MenuLink to="/" onClick={props.handleMouseDown}>
              {userName}
            </MenuLink>
          </MenuItem>
        )}
        {isAuthenticated ? null : (
          <div>
            <MenuItem>
              <MenuLink to="/login" onClick={props.handleMouseDown}>
                LOG IN
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/register" onClick={props.handleMouseDown}>
                REGISTER
              </MenuLink>
            </MenuItem>
          </div>
        )}
      </MenuList>
    </MenuSlider>
  )
}
export { NavMenu }
