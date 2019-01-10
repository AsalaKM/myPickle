import styled from "styled-components"
import { Link } from "react-router-dom"

export const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100vw;
  background-color: var(--white);
`

export const Buttons = styled.div`
  display: flex;
  height: 3rem;
  background-color: var(--white);
  width: 94vw;
  align-items: center;
  justify-content: space-evenly;
  border-top: 1px var(--lightPrimary) solid;
`

export const LinkRight = styled(Link)`
  width: 50%;
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: var(--darkPrimary);
  font-weight: 300;
  ${({ selected }) => selected && "font-weight: 600"};

  img {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }
`

export const LinkLeft = styled(LinkRight)`
  border-right: 1px var(--lightPrimary) solid;
`
