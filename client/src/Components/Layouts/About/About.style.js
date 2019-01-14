import styled from "styled-components"

export const WrapperElements = styled.div`
  margin: 0 auto;
  padding: 1rem;
  padding-top: 2rem;
`
export const MyPikle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  color: var(--primary);
`

export const List = styled.li.attrs({
  className: "list f5 pl0",
})``

export const Text = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`

export const Paragrapgh = styled.p`
  margin-bottom: 2rem;
`

export const SendingEmail = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;

  color: var(--primary);

  :hover {
    text-decoration: underline;
  }
`
