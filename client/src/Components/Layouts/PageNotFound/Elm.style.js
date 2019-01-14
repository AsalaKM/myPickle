import styled from "styled-components"
import { Link } from "react-router-dom"

const Error = styled.div`
  width: 75%;
  min-width: 300px;
  height: 445px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 25px auto;
  .error-logo {
    width: 100%;
  }
`
const Title = styled.h1`
  text-align: center;
  color: var(--black);
  font-size: 6em;
  margin: 10px;
  span {
    color: var(--primary);
  }
`
const Massege = styled.p`
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  line-height: 1.5;
  color: var(--black);
`
const HomeLink = styled(Link)`
  margin-top: 1rem;
  text-decoration: none;
  color: var(--primary);

  :hover {
    text-decoration: underline;
  }
`

export { Error, Title, Massege, HomeLink }
