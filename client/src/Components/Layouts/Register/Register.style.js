import styled from "styled-components"

const CircleLarge = styled.div.attrs({
  className: "mp-b--primary-color",
})`
  border-style: solid;
  position: absolute;
  border-radius: 50%;
  border-width: 1px;
  left: -40vw;
  width: 80vw;
  height: 80vw;
`

const CircleMed = styled(CircleLarge)`
  width: 60vw;
  height: 60vw;
  left: -30vw;
  top: 10vw;
`

const CircleSm = styled(CircleLarge)`
  width: 40vw;
  height: 40vw;
  left: -20vw;
  top: 20vw;
`

const CirclesContainer = styled.div`
  position: relative;
  height: 80vw;
`

const RegisterStepTwoWrapper = styled.div.attrs({
  className: "flex flex-column ph3",
})``

export { CircleLarge, CircleMed, CirclesContainer, CircleSm, RegisterStepTwoWrapper }
