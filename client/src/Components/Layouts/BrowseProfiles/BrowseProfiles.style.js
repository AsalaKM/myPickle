import styled from "styled-components"

const Button = styled.button`
  display: flex;
  margin: 0 auto;
  margin-top: 100px;
  height: 40px;
  width: 105px;
  margin-right: 37px;
  border-radius: 20px;
  border-color: #6eeb2e;
  background: #ffffff;
  border-width: 0.5px;
  color: #6eeb2e;
`
const Box = styled.div.attrs({
  className: "flex items-center justify-center",
})``

const Container = styled.div.attrs({
  className: "flex flex-row items-center ph3",
})`
  width: 90%;
  border-radius: 20px;
  background: #cccccca3;
  margin-top: 25px;
`
const ProfilePhoto = styled.img.attrs({
  className: "br-100 h4 w4 dib tl",
  alt: "avatar",
})``

const Details = styled.div.attrs({
  className: "flex flex-column ml3",
})``
const Name = styled.h2.attrs({ className: "mp-primary-color-dark fw6 mt0" })`
  font-size: 20px;
`
const WellnessList = styled.p.attrs({
  className: "mp-b--primary-color br3",
})`
  margin-top: -10px;
  text-align: center;
  border-style: dotted;
  border-width: 1.8px;
`

export { Button, Box, Container, ProfilePhoto, Details, Name, WellnessList }
