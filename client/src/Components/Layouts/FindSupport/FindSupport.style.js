import styled from "styled-components"

const SupportContainer = styled.div.attrs({
  className: "flex flex-row items-center ph3 mp-primary-color",
})`
  padding-top: 2rem;
`

const ProfilePhoto = styled.img.attrs({
  className: "br-100 h3 w3 dib tl",
  alt: "avatar",
  src: "https://mdbootstrap.com/images/avatars/img%20(1).jpg",
})`
  width: 100px;
  height: auto;
`
export { SupportContainer, ProfilePhoto }
