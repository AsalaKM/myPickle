import React from "react"
import { MenuLink, MenuSlider, MenuItem, MenuList } from "./StyledElm"
import { ReactComponent as Close } from "../../../assets//images/baseline-close-24px.svg"
import DropDownList from "./DropDownList"

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
