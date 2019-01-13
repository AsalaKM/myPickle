import styled from "styled-components"

export const SocialLink = styled.a.attrs({
  className: "link silver dib h2 w2 mr3 br-100",
})`
  cursor: pointer;

  :hover {
    color: var(--primary);
  }
`

export const SocialWrapper = styled.div`
  margin-top: 1rem;
`
