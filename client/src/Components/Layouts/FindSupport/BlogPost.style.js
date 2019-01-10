import styled from "styled-components"

const Box = styled.section.attrs({
  className: "mw6 center",
})``

const Container = styled.article.attrs({
  className: "dt center bb b--black-05 pb2 mt2",
})`
  width: 95%;
`

const Form = styled.form.attrs({
  className: "w-100 tr",
})``

const Link = styled.a.attrs({
  className: "f6 button-reset bg-white ba mp-b--primary-light dim pointer pa2 black-60",
})``

const DetailsOne = styled.div.attrs({
  className: "dtc v-mid pl3",
})``

const DetailsTwo = styled.div.attrs({
  className: "dtc v-mid",
})``

const ImageContainer = styled.div.attrs({
  className: "dtc w3 w3-ns v-mid",
})``

const ArticlePhoto = styled.img.attrs({
  className: "ba b--black-10 db w3 w3-ns h3 h3-ns",
  alt: "blog post image",
})``

const Title = styled.h2.attrs({
  className: "f5 f5-ns fw6 lh-title mp-black-color mv0",
})``

const List = styled.p.attrs({
  className: "f6 fw4 mt0 mb0 black-60",
})``

const Author = styled.p.attrs({
  className: "f6 lh-copy mv0 mp-primary-color",
})``

export {
  Box,
  Container,
  DetailsOne,
  DetailsTwo,
  Link,
  ImageContainer,
  ArticlePhoto,
  Title,
  List,
  Author,
  Form,
}
