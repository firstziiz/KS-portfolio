import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faMediumM, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import KSLogo from 'static/ks-logo-transparent.svg'

const Logo = styled.img`
  height: 6rem;
  margin-bottom: 2rem;
`

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

const SocialList = styled.div`
  > * {
    font-size: 2rem;
    margin: 0.8rem;
  }
`

const Welcome = () => (
  <Container className="container text-center">
    <Logo src={KSLogo} alt="" />
    <Header className="pb-2">Hello! 👏🏻 I'm Kanisorn Sutham.</Header>
    <SubHeader className="text-muted">
      Software Engineer Intern at <a href="#">Pronto Tools</a>.
    </SubHeader>
    <SocialList className="d-flex justify-content-center">
      <a href="https://medium.com/@FirsTziiz" target="_blank" className="no-border-bottom">
        <FontAwesomeIcon icon={faMediumM} />
      </a>
      <a href="http://github.com/firstziiz" target="_blank" className="no-border-bottom">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://linkedin.com/in/kanisorn-sutham"
        target="_blank"
        className="no-border-bottom"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="mailto:kanisorns.k@gmail.com" target="_blank" className="no-border-bottom">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </SocialList>
  </Container>
)

export default Welcome
