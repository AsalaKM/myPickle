import React from "react"
import styled, { css } from "styled-components"

const media = sizes => {
  return Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)}
      }
    `
    return acc
  }, {})
}

const BlockBox = styled.div(
  props => `
      width: ${props.theme.width || ""};
      height: ${props.theme.height || ""}
      font-size: ${props.theme.size || ""};
      margin: ${props.theme.margin || ""};
      padding: ${props.theme.padding || ""};
      border-radius: ${props.theme.radius || ""};
      background-color: ${props.theme.background || "var(--white)"};
      color: ${props.theme.color || "var(--black)"};
      border: ${props.theme.border || "none"};
      ${props.theme.child || ""}
      ${props.media ? media(props.mediaSizes) : ""}
  `
)
const Button = props => {
  const theme = {
    width: "300px",
    height: "35px",
    margin: "15px auto 0 auto",
    background: "var(--primary)",
    color: "var(--black)",
    radius: "3px",
    child: "display:flex;justify-content: center;align-items: center;cursor: pointer;",
  }
  return (
    <BlockBox as="button" theme={theme} {...props}>
      {props.children}
    </BlockBox>
  )
}
export { BlockBox, media, Button }
