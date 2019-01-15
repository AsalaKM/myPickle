import styled from "styled-components"

const Button = styled.button.attrs({
  className: "f4 button-reset bg-white ba mp-b--primary-light dim pointer pv1 black-60",
})`
  margin-top: 20px;
`

const Box = styled.main.attrs({
  className: "mw6 center",
})``

const Container = styled.article.attrs({
  className: "dt center bb b--black-05 pa2 mt3 mp-bg-lightwhite br2 shadow-5",
})`
  width: 95%;
  display: flex;
  align-items: center;
`
const Avatar = styled.div.attrs({
  className: "dtc w3 w3-ns v-mid flex",
})`
  align-items: center;
  height: 100%;
`

const ProfilePhoto = styled.img.attrs({
  className: "b--black-10 db br-100 w3 w3-ns h3 h3-ns",
  alt: "avatar",
})`
  object-fit: cover;
`

const DetailsOne = styled.div.attrs({
  className: "dtc v-mid pl3",
})`
  width: 80%;
`

const Name = styled.h2.attrs({ className: "f5 f5-ns fw6 lh-title mp-black-color mv0" })``

const List = styled.p.attrs({
  className: "f7 fw4 mt0 mb0 black-60",
})``

const DetailsTwo = styled.div.attrs({
  className: "fr",
})``

const Link = styled.a.attrs({
  className: "pointer",
})``

const Arrow = styled.img.attrs({
  className: "",
})`
  object-fit: cover;
  width: 40px;
  height: 40px;
`
const Profiles = styled.div`
  padding-bottom: 3rem;
`

export {
  Button,
  Box,
  Container,
  ProfilePhoto,
  DetailsOne,
  DetailsTwo,
  Name,
  List,
  Avatar,
  Arrow,
  Link,
  Profiles,
}
