import styled from "styled-components"
// create styled component for the article
const Title = styled.h1`
  font-weight: 600;
  color: #4d4d4d;
  font-size: 2.2em;
  text-align: center;
`
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .form-control {
    width: 100%;
  }
`
const Input = styled.input`
  width: 100%;
  border-radius: 3px;
  height: 35px;
  border: ${props => props.border || "1px solid #ccc"};
  background-color: #fff;
  padding: ${props => (props.padding ? "0.78571429em 1em" : "")};
  margin-top: 5px;
  &[type="file"] {
    border: none;
  }
`
const Label = styled.label`
  width: 100% !important;
  display: flex;
  flex-direction: column;
  color: var(--black);
  font-size: 0.8em;
  margin: 0.5em 0;
  text-transform: uppercase;
  .article-form-select {
    margin-top: 5px;
  }
  .img-upload-wrapper {
    position: relative;
    .img-upload-wrapper-background {
      margin-top: 5px;
      position: absolute;
      top: 0;
      left: 0;
      background: #ffffff;
      color: #000000;
      width: 100%;
      height: 38px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #ccc;
      &:active {
        background-color: var(--primary);
      }
    }
  }
`
const TextArea = styled.textarea.attrs({
  rows: "6",
})`
  width: 100%;
  margin-top: 5px;
  padding: 0.78571429em 1em;
  background: #fff;
  border: 1px solid ${props => props.border || "rgba(34, 36, 38, 0.15)"};
  outline: 0;
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  line-height: 1.2857;
  resize: vertical;
`
const AlertMsg = styled.span`
  width: 100%;
  font-family: "Raleway", sans-serif;
  color: ${props => props.active && "red"};
`
const Button = styled.button`
  width: 300px;
  height: 35px;
  margin: 15px auto 15px auto;
  background: var(--primary);
  color: var(--black);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
`

export { Form, Input, Label, Title, TextArea, AlertMsg, Button }
