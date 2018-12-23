import React from "react"
import styled from "styled-components"
import { BlockBox } from "../../Generic-helpers/BlockBox"
import img from "../../../assets/pickle_logo.svg"

const Line = styled.span`
  width: 35px;
  height: 5px;
  background-color: #656565;
  margin-top: 4px;
  &:first-child {
    margin-top: 0 !important;
  }
`

const BurgerButton = () => {
  const theme = {
    background: "var(--white)",
    radius: "3px",
    size: "14px",
    color: "#656565",
    border: "var(--black)",
    padding: "0 3px",
    child: "display: flex;flex-direction: column;justify-content: center;",
  }
  return (
    <BlockBox theme={theme}>
      <Line />
      <Line />
      <Line />
    </BlockBox>
  )
}
const Logo = styled.img.attrs({ src: img })`
  display: flex;
  width: 20%;
  height: 48px;
`

export { BurgerButton, Logo }
