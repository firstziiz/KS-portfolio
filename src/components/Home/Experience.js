import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
  background: white;
`

const ExperiencesList = styled.div``

const ExperinceItem = styled.div`
  img {
    height: 70px;
    border-radius: 0.7rem;
  }
`

const Experience = ({ exps }) => (
  <Background>
    <div className="container py-4">
      <div className="pb-2">
        <h2 className="mb-0">🎯 Experience.</h2>
        <span className="d-block text-muted">
          Whatever I had or gained. such as works, education, etc.
        </span>
      </div>
      <ExperiencesList>
        {exps.map((exp, index) => (
          <ExperinceItem className="d-flex" key={index}>
            <div className="py-3 d-flex">
              <img src={exp.logo} alt="" />
            </div>
            <div className="p-2">
              <div className="time small">{exp.time}</div>
              <h4 className="headline m-0">
                {exp.title}
                <small>
                  <i>{` at `}</i>
                  {exp.location}
                </small>
              </h4>
              <p className="mb-1">{exp.description}</p>
            </div>
          </ExperinceItem>
        ))}
      </ExperiencesList>
    </div>
  </Background>
)

export default Experience
