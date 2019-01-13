import React from "react"
import { WrapperElements, MyPikle, Text, SendingEmail, Paragrapgh } from "./About.style"

const AboutmyPikle = () => (
  <WrapperElements>
    <MyPikle>My Pickle</MyPikle>
    <Text>
      <h5>WE STAND FOR WORLDWIDE WELLNESS</h5>
      <h5>We want people to be better supported.</h5>
      <h5>We care about access to services.</h5>
    </Text>
    <Paragrapgh>
      Find health & wellbeing support that’s right for you. Be supported and have a better life.
      Feel happier, stronger and healthier.
    </Paragrapgh>
    <SendingEmail href="mailto:cat@mypickle.org">
      Click here to contact us and find out more
    </SendingEmail>
  </WrapperElements>
)
export default AboutmyPikle
