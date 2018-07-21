import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 10rem 0;
`

const Header = styled.h1``

const SubHeader = styled.h4`
  font-weight: 400;

  a {
    font-style: italic;
  }
`

const Welcome = () => (
  <Container className="container text-center">
    <Header className="pb-2">Hello! 👏🏻 I'm Kanisorn Sutham</Header>
    <SubHeader>
      Software Engineer Intern at <a href="#">Pronto Tools</a>.
    </SubHeader>
  </Container>
)

export default Welcome
