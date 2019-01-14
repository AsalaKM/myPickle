import React from "react"
import { WrapperElements, MyPikle, Text, SendingEmail, List } from "./About.style"

const AboutmyPikle = () => (
  <WrapperElements>
    <MyPikle>About My Pickle</MyPikle>
    <Text>
      <p>
        We make finding support easy. As an independent nonprofit community support network, we
        offer:
      </p>
      <h4>We make finding support easy.</h4>
      <h4>As an independent nonprofit community support network, we offer:</h4>
      <List>
        <p>Simplicity – Expertly designed for great user experience</p>
        <p>Community – Share & find advice & stories</p>
        <p>Variety – Search public, private, charities & community services</p>
      </List>
      <h4>And we give back. All our profits are donated to improve access to services.</h4>
      <h4>Click here to contact us & find out more.</h4>
    </Text>
    <SendingEmail href="mailto:cat@mypickle.org">
      Click here to contact us and find out more
    </SendingEmail>
  </WrapperElements>
)
export default AboutmyPikle
