import styled from "styled-components"

export const Button = styled.button.attrs({
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

export const ApprovalButton = styled.button.attrs({
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

export const DisapprovalButton = styled.button.attrs({
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

export const ProfileButton = styled(Button)`
  width: 30vw;
  margin: 0;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
`
export const ContactButton = styled(Button)`
  margin: 0;
  height: 2rem;
  background-color: white;
`
