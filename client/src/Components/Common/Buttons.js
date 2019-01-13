import styled from "styled-components"

const Button = styled.button.attrs({
  className: "mp-bg-white mp-b--primary-color",
})`
  border-style: solid;
  border-width: 1px;
  border-radius: 2rem;
  cursor: pointer;
  margin-top: 2rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
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

const ApprovalButton = styled.button.attrs({
  className: "f7 mp-bg-white mp-b--primary-color",
})`
  border-style: solid;
  border-width: 1px;
  border-radius: 2rem;
  cursor: pointer;
  margin-top: 1rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  width: 30vw;
  height: 2rem;

  :hover {
    background-color: var(--primary);
    color: var(--white);
  }
  :focus {
    background-color: var(--darkPrimary);
    color: var(--white);
  }
`

const DisapprovalButton = styled.button.attrs({
  className: "f7 mp-bg-white mp-b--alert",
})`
  border-style: solid;
  border-width: 1px;
  border-radius: 2rem;
  cursor: pointer;
  margin-top: 1rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  width: 35vw;
  height: 2rem;

  :hover {
    background-color: var(--primary);
    color: var(--white);
  }
  :focus {
    background-color: var(--darkPrimary);
    color: var(--white);
  }
`

export { Button, ApprovalButton, DisapprovalButton }
