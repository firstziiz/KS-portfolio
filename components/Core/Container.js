import React from 'react'
import styled from 'styled-components'

const ContainerWrapper = styled.div`
  padding: 2em 0;
`

const Container = ({ children }) => (
  <ContainerWrapper className="container text-center">
    { children }
  </ContainerWrapper>
)

export default Container