import React from "react"
import styled, { keyframes } from "styled-components"
// crearte prograss bar for image upload
const ProgressBarWrapper = styled.div`
  background-color: #ccc;
  margin-top: 5px;
  height: 8px;
  width: 100%;
`

const fillWidly = y => keyframes`
  0% { 
    width: 0%
  }
  100% {
    width: ${y}%;
    background: green;
  } 
`
const ProgressBarDiv = styled.div`
  background: #ff0000;
  height: 100%;
  animation: ${props => (props.inActive ? "none" : fillWidly(props.fill))} 3s linear;
  animation-fill-mode: forwards;
  position: relative;
`
const PrograssBar = props => {
  return (
    <ProgressBarWrapper>
      <ProgressBarDiv fill={props.fill} inActive={props.inActive} />
    </ProgressBarWrapper>
  )
}

export default PrograssBar
