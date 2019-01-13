import styled from "styled-components"

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
  `
)

export { BlockBox }
