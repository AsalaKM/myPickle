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

const SupportContainer = styled.div.attrs({
  className: "flex flex-row items-center ph3 mp-primary-color",
})`
  padding-top: 2rem;
`

const ProfilePhoto = styled.img.attrs({
  className: "br-100 h3 w3 dib tl",
  alt: "avatar",
})`
  width: 100px;
  height: auto;
`

export { Button, SupportContainer, ProfilePhoto }
