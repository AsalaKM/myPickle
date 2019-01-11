import styled from "styled-components"
import { Link } from "react-router-dom"

export const Article = styled.div.attrs({
  className: "pb5",
})``

export const Header = styled.div.attrs({
  className: "tc-1 ph3 pt4 pt5-ns pb3",
})``

export const Title = styled.h1.attrs({
  className: "f3 f2-m f-subheadline-l measure lh-title fw1 mt0 mp-primary-color",
})``

export const Image = styled.img.attrs({
  className: "w-100 dib measure f3",
})``

export const Content = styled.div.attrs({
  className: "measure db center f5 f4-ns lh-copy",
})``

export const ProfilePhoto = styled.img.attrs({
  className: "ba b--black-10 db br-100 w3 w3-ns h3 h3-ns",
})``

export const ProfileWrapper = styled.div.attrs({
  className: "",
})`
  padding-left: 1rem;
  padding-right: 1rem;
`

export const ProfileLink = styled(Link).attrs({
  className: "center flex",
})`
  text-decoration: none;
  cursor: pointer;
  color: var(--black);
  align-items: center;
  justify-content: space-between;
  background-color: var(--gray);
  border-radius: 6rem;
  font-size: 14px;

  div {
    background-color: var(--lightPrimary);
    display: flex;
    align-items: center;
    width: 75%;
    border-radius: 6rem;

    p {
      padding-left: 0.5rem;
    }
  }

  .view-profile {
    width: 25%;
    text-align: center;
    padding-left: 1rem;
  }
`
