import styled from "styled-components"

const CommonStyles = styled.div`
  margin-bottom: 32px;

  h4 {
    margin-bottom: 0;
  }

  header {
    p {
      margin-top: 8px;
    }
  }
  /* .helpertext {
    opacity: 0.8;
    size: 16px;
  } */

  /* ${({ unanswered }) => unanswered && "color: red;"} */
`

const TextField = styled(CommonStyles)`
  input,
  textarea {
    border-radius: 1rem;
    border: 1px solid var(--primary);
    width: 100%;
    padding: 8px;
  }

  /* ${({ unanswered }) => unanswered && "color: red; input { border: 1px solid red} "} */
`

export { TextField }
