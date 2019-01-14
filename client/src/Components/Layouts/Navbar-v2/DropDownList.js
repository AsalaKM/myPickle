import React from "react"
import { MenuLink, MenuItem, MenuList, Button } from "./StyledElm"

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

export default DropDownList
