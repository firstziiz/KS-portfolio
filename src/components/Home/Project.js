import React from 'react'
import styled from 'styled-components'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProjectItem = styled.div`
  img {
    height: 70px;
    border-radius: 0.7rem;
  }

  .tags > .tag {
    padding: 0.2rem 0.8rem;
    background: #ccc;
    border-radius: 1rem;
    display: flex;
    align-items: center;

    svg {
      margin-left: 0.4rem;
    }
  }
`

const Project = () => (
  <div className="container py-4">
    <div className="pb-2">
      <h2 className="mb-0">Projects.</h2>
      <span className="d-block text-muted">Everythings I do or get it done!.</span>
    </div>
    <div>
      {[...Array(9)].map((project, index) => (
        <ProjectItem className="d-flex" key={index}>
          <div className="py-3 d-flex">
            <img
              src="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_120,w_120,f_auto,b_white,q_auto:eco/v1476930694/his8lxs1d2ljks4jyzd0.png"
              alt=""
            />
          </div>
          <div className="p-2">
            <div className="time small">
              {`2017`} at{' '}
              <a href="#">
                <i>Pronto Tools</i>
              </a>
            </div>
            <h4 className="headline m-0">
              {`Simplesat`}
              <small>
                <i>{`, `}</i>
                {`Simple Satisfaction for human.`}
              </small>
            </h4>
            <p className="m-0">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet ipsa nam unde amet
              consequuntur! Perspiciatis facilis quas voluptate?
            </p>
            <div className="tags d-flex flex-wrap">
              {[...Array(4)].map((tag, index) => (
                <div className="tag mr-2 m-1 small" key={index}>
                  React
                </div>
              ))}
              <a href="#" className="tag mr-2 m-1 small github">
                {`GitHub `}
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" className="tag mr-2 m-1 small link">
                {`Go to Project `}
                <FontAwesomeIcon icon={faLink} />
              </a>
            </div>
          </div>
        </ProjectItem>
      ))}
    </div>
  </div>
)

export default Project
