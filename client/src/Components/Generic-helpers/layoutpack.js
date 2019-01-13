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

export { Container, Wrapper, FormContainer }
