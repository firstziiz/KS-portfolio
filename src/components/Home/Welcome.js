import React from 'react'
import styled from 'styled-components'

const Header = styled.h1``

const SubHeader = styled.h4`
  font-weight: 400;

  a {
    font-style: italic;
  }
`

const Welcome = () => (
  <div className="container text-center py-4">
    <Header className="pb-2">Hello! 👏🏻 I'm Kanisorn Sutham</Header>
    <SubHeader>
      Software Engineer Intern at <a href="#">Pronto Tools</a>.
    </SubHeader>
  </div>
)

export default Welcome
