import styled from "styled-components"

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-flow: column wrap;
  max-width: 992px;
  width: 95%;
`
const Wrapper = styled.div`
  width: 100%;
`
const FormContainer = styled(Container)`
  margin-top: 5px;
  display: flex;
  align-items: center;
`
const ColoredWrapper = styled(Wrapper)`
  background-color: ${props => props.background || "var(--white)"};
  box-shadow: ${props => props.shadow || ""};
`

export { Container, Wrapper, ColoredWrapper, FormContainer }
