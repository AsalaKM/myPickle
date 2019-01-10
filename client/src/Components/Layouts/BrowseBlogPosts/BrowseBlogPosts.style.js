import styled from "styled-components"
import { Link } from "react-router-dom"

const Box = styled.section.attrs({
  className: "mw7 center avenir",
})``

const Container = styled.article.attrs({
  className: "bt bb b--black-10 pv3 ph2 ph0-l",
})``

const Article = styled(Link).attrs({
  className: "db no-underline black dim",
})``

const Wrapper = styled.div.attrs({
  className: "flex flex-column flex-row-ns",
})``

const ImageContainer = styled.div.attrs({
  className: "pr3-ns mb4 mb0-ns w-100 w-40-ns",
})``

const ArticlePhoto = styled.img.attrs({
  className: "db",
  alt: "blog post image",
})``

const Content = styled.div.attrs({
  className: "w-100 w-60-ns pl3-ns",
})``

const Title = styled.h2.attrs({
  className: "f3 fw1 mt0 lh-title mp-black-color",
})``

const TextContent = styled.p.attrs({
  className: "f5 fw1 mt0 lh-title",
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
  Article,
  Wrapper,
  ImageContainer,
  ArticlePhoto,
  Content,
  Title,
  TextContent,
  List,
  Author,
}
