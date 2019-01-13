import styled from "styled-components"

export const Container = styled.div`
  background: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
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
    position: absolute;
    top: -2.25rem;
    color: var(--primary);
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 1.5rem;
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
  padding-top: 1rem;
`

export const Bio = styled.section`
  background: white;
  width: 90%;
  height: 100px;
  margin-left: 50px;
  border-radius: 12px;
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
export const Services = styled.section`
  background: white;
  width: 90%;
  height: 375px;
  margin-left: 50px;
  border-radius: 12px;
`
export const help = styled.div``
export const OptionsOfSupport = styled.button`
  background: #59bf15;
  border: none;
  color: white;
  height: 50px;
  border-radius: 5px;
  width: 130px;
`
export const SupportAnswers = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`
export const Delivery = styled.div``

export const Booking = styled.section`
  background: gray;
  width: 90%;
  height: 200px;
  margin-left: 50px;
  border-radius: 12px;
`
export const Contact = styled.section`
  width: 90%;
  height: 100px;
  margin-left: 50px;
  border-radius: 12px;
  background: white;
`
