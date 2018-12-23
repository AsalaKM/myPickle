import React from "react"
import styled, { keyframes } from "styled-components"

const ProgressBarWrapper = styled.div`
  background-color: #ccc;
  margin-top: 5px;
  height: 8px;
  width: 100%;
`

const fillWidly = y => keyframes`
0% {width: 0%}
100% {width: ${y}%} 
`
const ProgressBarDiv = styled.div`
  background: #ff0000;
  height: 100%;
  animation: ${props => props.fill} 5s linear 20; //will animate 20 times
  position: relative;
`
const PrograssBar = props => {
  return (
    <ProgressBarWrapper>
      <ProgressBarDiv fill={() => fillWidly(props.fill)} />
    </ProgressBarWrapper>
  )
}

export default PrograssBar
