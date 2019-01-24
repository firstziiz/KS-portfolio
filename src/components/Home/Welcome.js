import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faMediumM, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'
import KSLogo from 'static/ks-logo-transparent.svg'

const Background = styled.div`
  background: #fafafa; /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #fafafa, #cfdef3); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #fafafa, #cfdef3);
`

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

const Welcome = ({ profile }) => (
  <Background>
    <Container className="container text-center">
      <Logo src={KSLogo} alt="" />
      <Header className="pb-2">Hello! 👏🏻 I'm Kanisorn Sutham.</Header>
      <SubHeader className="text-muted">
        {profile.position} at{' '}
        <a href={profile.company_link} target="_blank">
          {profile.company_name}
        </a>.
      </SubHeader>
      <SocialList className="d-flex justify-content-center">
        <a href="https://medium.com/@FirsTziiz" target="_blank" className="no-border-bottom">
          <FontAwesomeIcon icon={faMediumM} />
        </a>
        <a href="http://github.com/firstziiz" target="_blank" className="no-border-bottom">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="mailto:kanisorns.k@gmail.com" target="_blank" className="no-border-bottom">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="/KANISORN_SUTHAM_CV.pdf" target="_blank" className="no-border-bottom">
          <FontAwesomeIcon icon={faFile} />
        </a>
      </SocialList>
    </Container>
  </Background>
)

export default Welcome
