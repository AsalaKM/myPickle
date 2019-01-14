import styled from "styled-components"
import { Link } from "react-router-dom"

export const Header = styled.div.attrs({
  className: "flex flex-column items-center ph3 mp-primary-color",
})`
  margin-bottom: 1rem;
`

export const EditContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 1rem;
  margin-top: 2rem;
`

export const Button = styled(Link)`
  width: 50%;
  border: none;
  background: white;
  border-style: solid;
  border-width: 1px;
  border-color: #76ec54;
  display: block;
  box-shadow: 1px 1px #ccc;
  border-radius: 0.5rem;
  height: 6rem;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: var(--black);
  text-align: center;

  :hover {
    background-color: var(--primary);
    color: var(--white);
  }
  :focus {
    background-color: var(--darkPrimary);
    color: var(--white);
  }
`

export const BasicInfo = styled(Button)`
  height: 100px;
  width: 100%;
`

export const LeftButton = styled(Button)`
  margin-right: 0.5rem;
`

export const RightButton = styled(Button)`
  margin-left: 0.5rem;
`

export const TwoButton = styled.div`
  display: flex;
`

export const ProfileContainer = styled(Link)`
  display: flex;
  justify-content: center;
  padding: 1.5rem;
  color: var(--primary);
  align-items: center;
  cursor: pointer;
  text-decoration: none;

  img {
    margin: 0.5rem;
  }
`
