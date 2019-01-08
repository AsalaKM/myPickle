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
  className: "flex flex-column",
})`
  background: gray;
  font-size: 15px;
`

export { Button, Box, Container, ProfilePhoto, Details }
