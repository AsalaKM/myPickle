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
  className: "dt center bb b--black-05 pb2 mt2",
})`
  width: 95%;
`
const Avatar = styled.div.attrs({
  className: "dtc w3 w3-ns v-mid",
})``

const ProfilePhoto = styled.img.attrs({
  className: "ba b--black-10 db br-100 w3 w3-ns h3 h3-ns",
  alt: "avatar",
})``

const DetailsOne = styled.div.attrs({
  className: "dtc v-mid pl3",
})``

const Name = styled.h2.attrs({ className: "f5 f5-ns fw6 lh-title mp-black-color mv0" })``

const WellnessList = styled.p.attrs({
  className: "f6 fw4 mt0 mb0 black-60",
})``

const DetailsTwo = styled.div.attrs({
  className: "dtc v-mid",
})``

const Form = styled.form.attrs({
  className: "w-100 tr",
})``

const More = styled.button.attrs({
  className: "f6 button-reset bg-white ba mp-b--primary-light dim pointer pv1 black-60",
})``

export {
  Button,
  Box,
  Container,
  ProfilePhoto,
  DetailsOne,
  DetailsTwo,
  Name,
  WellnessList,
  Avatar,
  More,
  Form,
}
