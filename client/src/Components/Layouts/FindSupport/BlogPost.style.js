import styled from "styled-components"

const Box = styled.section.attrs({
  className: "mw6 center",
})``

const Container = styled.article.attrs({
  className: "dt center bb b--black-05 pb2 mt2 mp-bg-white shadow-5",
})`
  width: 95%;
`

const Link = styled.a.attrs({
  className: "pointer",
})``

const DetailsOne = styled.div.attrs({
  className: "dtc v-mid pl3",
})``

const DetailsTwo = styled.div.attrs({
  className: "fr",
})`
  margin-bottom: 20px;
`

const ImageContainer = styled.div.attrs({
  className: "dtc w4 w4-ns ",
})``

const ArticlePhoto = styled.img.attrs({
  className: "br1 b--black-10 db",
  alt: "blog post image",
})`
  object-fit: cover;
  height: 100px;
`
const Arrow = styled.img.attrs({
  className: "",
})`
  object-fit: cover;
  width: 40px;
  height: 40px;
`

const Title = styled.h2.attrs({
  className: "f5 f5-ns fw6 lh-title mp-black-color mv0",
})``

const List = styled.p.attrs({
  className: "f7 fw4 mt0 mb0 black-60",
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
  Arrow,
}
