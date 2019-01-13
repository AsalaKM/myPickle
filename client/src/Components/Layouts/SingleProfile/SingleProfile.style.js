import styled from "styled-components"
import { Link } from "react-scroll"

export const Container = styled.div`
  background: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
`

export const SectionCard = styled.section`
  background: white;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 3rem;
  padding: 1rem;
  position: relative;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);

  h3 {
    position: absolute;
    top: -2rem;
    color: var(--primary);
    font-size: 1.25rem;
  }
`

export const TitleCard = styled(SectionCard)`
  margin-bottom: 1.5rem;

  h2 {
    color: var(--primary);
    margin: 0;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`

export const ContactButton = styled.button`
  background: #59bf15;
  border: none;
  height: 26px;
  width: 91px;
  margin-left: 20px;
  border-radius: 5px;
`
export const Avatar = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 100px;
  margin-top: 23px;
`

export const Informations = styled.div`
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  width: 70vw;

  .contact {
    margin-top: 1rem;
  }
`

export const Navigate = styled.div`
  display: flex;
  padding: 0.5rem;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2.5rem;
`
export const Button = styled.button`
  width: 20%;
  height: 40px;
  background: #59bf15;
  border: none;
  color: white;
  border-radius: 5px;
`

export const LocationWrapper = styled.div`
  display: flex;

  img {
    margin-right: 0.5rem;
  }

  p {
    font-family: "Gosmick Sans", sans-serif;
    font-size: 1.25rem;
  }
`
export const NavLink = styled(Link).attrs({
  className: "mp-bg-white mp-b--primary-color",
})`
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  width: 30vw;
  height: 3rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  text-align: center;

  :hover {
    background-color: var(--primary);
    color: var(--white);
  }
  :focus {
    background-color: var(--darkPrimary);
    color: var(--white);
  }
`

export const ContactLink = styled(NavLink)`
  height: 2rem;
  border-radius: 2rem;
  box-shadow: 0 0;
  width: 40vw;
`

export const BlogLink = styled.a.attrs({
  className: "mp-bg-white mp-b--primary-color",
})`
  border-style: solid;
  text-decoration: none;
  color: var(--black);
  border-width: 1px;
  cursor: pointer;
  width: 30vw;
  height: 3rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  text-align: center;

  :hover {
    background-color: var(--primary);
    color: var(--white);
  }
  :focus {
    background-color: var(--darkPrimary);
    color: var(--white);
  }
`

export const UrlLink = styled.a`
  text-decoration: none;
  color: var(--primary);
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`
