import React from 'react'
import styled from 'styled-components'

import Container from '../Core/Container'
import Myself from './Myself'
import Tags from './Tags'

import content from './content.json'

const Avatar = styled.div`
  width: 18em;
  margin: 0 auto;
  padding: .5em;
  border: 1px solid #ccc;
`

const Profile = () => (
  <Container>
    <Avatar>
      <img src="/static/images/profile.jpg" className="img-fluid" />
    </Avatar>
    <Myself />
    {
      content.skills.map((skill, index) => (
        <Tags key={index} title={skill.title} tags={skill.tags} />
      ))
    }
  </Container>
)

export default Profile
