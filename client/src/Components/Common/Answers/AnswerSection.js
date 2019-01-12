import React, { Component } from "react"

export default class AnswerSection extends Component {
  render() {
    const { answers } = this.props

    return (
      <React.Fragment>
        <div>
          {answers
            .filter(
              answer =>
                answer.question[0].inputType === "checkbox" ||
                answer.question[0].inputType === "dropdown"
            )
            .map((answer, index) => (
              <div key={index}>
                <h4>{answer.question[0].questionText}</h4>
                {answer.answer.map((option, index) => (
                  <div key={index}>{option}</div>
                ))}
              </div>
            ))}
          {answers
            .filter(answer => {
              const { inputType } = answer.question[0]
              return (
                inputType === "text" ||
                inputType === "textarea" ||
                inputType === "radio" ||
                inputType === "address" ||
                inputType === "calendar"
              )
            })
            .map((answer, index) => (
              <div key={index}>
                <h4>{answer.question[0].questionText}</h4>
                <p>{answer.answer}</p>
              </div>
            ))}
          {answers
            .filter(answer => {
              const { inputType } = answer.question[0]
              return inputType === "url"
            })
            .map((answer, index) => (
              <div key={index}>
                <h4>
                  <a href={answer.answer}>{answer.question[0].questionText}</a>
                </h4>
              </div>
            ))}
        </div>
      </React.Fragment>
    )
  }
}
