import React, { Component } from "react"
import { BurgerButton, Logo } from "./StyledElm"
import { BlockBox } from "../../Generic-helpers/BlockBox"
import { Container, ColoredWrapper } from "../../Generic-helpers/layoutpack"

class Navbar extends Component {
  render() {
    const theme = {
      child: "display:flex;flex: 0 1 50px;align-items: center; justify-content: space-between;",
      width: "100%",
    }
    const Empty = {
      width: "20%",
    }
    return (
      <ColoredWrapper shadow="0px 0px 3px #000000">
        <Container>
          <BlockBox theme={theme}>
            <BurgerButton />
            <Logo />
            <BlockBox theme={Empty} />
          </BlockBox>
        </Container>
      </ColoredWrapper>
    )
  }
}
export default Navbar
