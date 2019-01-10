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
0% {width: 0%}
100% {width: ${y}%} 
`
const ProgressBarDiv = styled.div`
  background: #ff0000;
  height: 100%;
  animation: ${props => fillWidly(props.fill)} 3s linear; //will animate 20 times
  position: relative;
`
const PrograssBar = props => {
  return (
    <ProgressBarWrapper>
      <ProgressBarDiv fill={props.fill} />
    </ProgressBarWrapper>
  )
}

export default PrograssBar
