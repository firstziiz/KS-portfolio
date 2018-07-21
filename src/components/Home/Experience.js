import React from 'react'
import styled from 'styled-components'

const ExperiencesList = styled.div``

const ExperinceItem = styled.div`
  img {
    height: 70px;
    border-radius: 0.7rem;
  }
`

const Experience = () => (
  <div className="container py-4">
    <div className="pb-2">
      <h2 className="mb-0">Experience.</h2>
      <span className="d-block text-muted">
        Whatever I had or gained. such as works, education, etc.
      </span>
    </div>
    <ExperiencesList>
      {[...Array(7)].map((exp, index) => (
        <ExperinceItem className="d-flex" key={index}>
          <div className="py-3 d-flex">
            <img src="https://abinavseelan.com/static/hashnode.7956f957.jpg" alt="" />
          </div>
          <div className="p-2">
            <div className="time small">{`2017 - Current`}</div>
            <h4 className="headline m-0">
              {`Front-End Developer (Volunteer)`}
              <small>
                <i>{` at `}</i>
                {`Young Passionate Program`}
              </small>
            </h4>
            <p className="mb-1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet ipsa nam unde amet
              consequuntur! Perspiciatis facilis quas voluptate? Quam eius commodi veritatis
              laboriosam necessitatibus nulla facere quaerat non, maiores ipsam?
            </p>
          </div>
        </ExperinceItem>
      ))}
    </ExperiencesList>
  </div>
)

export default Experience
