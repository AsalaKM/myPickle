import styled from "styled-components"
import { Link } from "react-router-dom"

export const Heading = styled.h3.attrs({
  className: "f5 f5-ns fw4 lh-title mp-black-color mv0",
})``

export const AllButton = styled(Link).attrs({
  className: "f5 f5-ns fw4 lh-title mp-primary-color mv0 no-underline",
})``

export const Box = styled.div.attrs({})`
  padding-bottom: 3rem;
`

export const Container = styled.div.attrs({
  className: "dt center bb b--black-05 mt2 mp-bg-grey",
})`
  width: 95%;
`

export const ColumnContainer = styled.div.attrs({
  className: "dt w-100 mt2",
})``

export const ColumnOne = styled.div.attrs({
  className: "dtc",
})``

export const ColumnTwo = styled.div.attrs({
  className: "dtc tr",
})``
