import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 0 auto;
  align-items: center;

  h2 {
    margin-bottom: 2rem;
  }
`
export const Headline = styled.p.attrs({
  className: "f4 mp-alert-color",
})``

export const Text = styled.p.attrs({
  className: "f6",
})``

export const Button = styled.button`
  height: 50px;
  width: 100%;
  border-radius: 9px;
  border-style: solid;
  border-width: 0.5px;
  border-color: #53dd6c;
  background: #f8fbfa;
  box-shadow: 1px 1px green;
  cursor: pointer;
`
export const Logout = styled.button`
  height: 50px;
  width: 100%;
  border: none;
  border-radius: 5px;
  color: var(--alert);
  background-color: var(--white);
  cursor: pointer;
`
