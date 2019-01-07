import styled from "styled-components"

const CommonStyles = styled.div`
  margin-bottom: 8px;

  h4 {
    margin-bottom: 0;
  }

  header {
    p {
      margin-top: 8px;
    }
  }
`

const TextField = styled(CommonStyles)`
  input,
  textarea {
    border-radius: 1rem;
    border: 1px solid var(--primary);
    width: 100%;
    padding: 8px;
  }
`

const DropdownField = styled(CommonStyles)`
  .dropdown__control {
    border: 1px solid var(--lightPrimary);
    border-radius: 24px;

    :hover {
      border: 1px solid var(--primary);
    }
  }

  .dropdown__multi-value {
    border-radius: 24px;
    background-color: var(--gray);
  }

  .dropdown__multi-value__remove {
    border-radius: 50%;
  }
`

const RadioField = styled(CommonStyles)`
  .answers {
    display: flex;
    cursor: pointer;
    position: relative;
    flex-direction: column;
  }

  label {
    display: flex;
    align-items: center;
    position: relative;

    p {
      padding-left: 16px;
      width: 85%;
    }

    input {
      position: absolute;
      height: 25px;
      width: 25px;
      opacity: 0;
      cursor: pointer;

      :hover ~ .checkmark {
        background-color: var(--lightPrimary);
      }

      :checked ~ .checkmark {
        background-color: white;
        border: 8px solid var(--primary);
        height: 17px;
        width: 17px;
      }

        border-radius: 50%;
        background-color: white;
      } 
    }

    .checkmark {
      height: 25px;
      width: 25px;
      background-color: white;
      border: 1px dotted var(--lightPrimary);
      border-radius: 50%;
      display: block;
    }
  }
`

const CheckboxField = styled(RadioField)`
    .checkmark {
      border-radius: 8px;
    }
  }
`

const MatrixField = styled(CheckboxField)`
  .answers {
    display: flex;
    cursor: pointer;
    position: relative;
    flex-direction: column;
  }

  .options {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    position: relative;
  }
`

const ErrorMsg = styled.div.attrs({
  className: "mp-alert-color",
})`
  text-align: center;
`

export { TextField, RadioField, CheckboxField, ErrorMsg, DropdownField, MatrixField }
