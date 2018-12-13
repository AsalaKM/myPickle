import styled from "styled-components"

const Intro = styled.div.attrs({
  className: "flex flex-column items-center ph3",
})`
  padding-top: 2rem;
`

const Button = styled.button.attrs({
  className: "mp-bg-white mp-b--primary-color",
})`
  border-style: solid;
  border-width: 1px;
  border-radius: 2rem;
  cursor: pointer;
  margin-top: 2rem;
  width: 40vw;
  height: 3rem;

  :hover {
    background-color: var(--primary);
    color: var(--white);
  }
  :focus {
    background-color: var(--darkPrimary);
    color: var(--white);
  }
`

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

export { Intro, Button, CircleLarge, CircleMed, CirclesContainer, CircleSm }
