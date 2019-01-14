import React from "react"
import { MenuLink, MenuSlider, MenuItem, MenuList, DropdownHeader, Button } from "./StyledElm"
import { ReactComponent as Close } from "../../../assets/images/baseline-close-24px.svg"
import { ReactComponent as ArrowUp } from "../../../assets/images/baseline-expand_less-24px.svg"
import { ReactComponent as ArrowDown } from "../../../assets/images/baseline-expand_more-24px.svg"
import DropDownList from "./DropDownList"

const NavMenu = props => {
  const { toggle, userName, handleMouseDown, dropDownActive, toggleDropdown, logout } = props
  const { user, isAuthenticated } = props.userAuthData
  const structUserName = userName.length > 20 ? `${userName.slice(0, 20)}...` : userName
  return (
    <MenuSlider className={toggle ? "show" : "hide"}>
      {toggle ? <Close className="nav-index-offset" onMouseDown={handleMouseDown} /> : null}
      <MenuList>
        <MenuItem>
          <MenuLink to="/" onClick={handleMouseDown}>
            Home
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/blog" onClick={handleMouseDown}>
            Blog Posts
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/profiles" onClick={handleMouseDown}>
            Browse Profiles
          </MenuLink>
        </MenuItem>
        {isAuthenticated ? (
          <div>
            <MenuItem>
              <DropdownHeader onClick={toggleDropdown}>
                <MenuLink to={`/profile/${user}`}>{structUserName}</MenuLink>
                {dropDownActive ? (
                  <ArrowDown className="dropdown-header-arrow" />
                ) : (
                  <ArrowUp className="dropdown-header-arrow" />
                )}
              </DropdownHeader>
              {dropDownActive ? (
                <DropDownList handleMouseDown={handleMouseDown} profileId={user} />
              ) : null}
            </MenuItem>
            <MenuItem>
              <Button className="navmenu-usr-btn-logout" onClick={logout}>
                Logout
              </Button>
            </MenuItem>
          </div>
        ) : (
          <div>
            <MenuItem>
              <MenuLink to="/login" onClick={handleMouseDown}>
                LOG IN
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/register" onClick={handleMouseDown}>
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
