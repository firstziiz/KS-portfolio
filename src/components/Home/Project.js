import React from 'react'
import styled from 'styled-components'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import convert from 'htmr'

const ProjectItem = styled.div`
  img {
    height: 70px;
    border-radius: 0.7rem;
    border: 1px dotted #ccc;
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

const Project = ({ projects }) => (
  <div className="container py-4">
    <div className="pb-2">
      <h2 className="mb-0">🎁 Projects.</h2>
      <span className="d-block text-muted">Everythings I do or get it done!.</span>
    </div>
    <div>
      {projects.map((project, index) => (
        <ProjectItem className="d-flex" key={index}>
          <div className="py-3 d-flex">
            <img src={project.logo} alt="" />
          </div>
          <div className="p-2">
            <div className="time small">
              {project.time} at{' '}
              <a href={project.locationUrl} target="_blank">
                <i>{project.location}</i>
              </a>
            </div>
            <h4 className="headline m-0">
              {project.title}
              <small>
                <i>{`, `}</i>
                {project.shortDesc}
              </small>
            </h4>
            <p className="m-0">{convert(project.description)}</p>
            <div className="tags d-flex flex-wrap">
              {project.tags.map((tag, index) => (
                <div className="tag mr-2 m-1 small" key={index}>
                  {tag}
                </div>
              ))}
              {project.githubUrl !== '' && (
                <a href="#" className="no-border-bottom tag mr-2 m-1 small github">
                  {`GitHub `}
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              )}
              {project.projectUrl !== '' && (
                <a href="#" className="no-border-bottom tag mr-2 m-1 small link">
                  {`Go to Project `}
                  <FontAwesomeIcon icon={faLink} />
                </a>
              )}
            </div>
          </div>
        </ProjectItem>
      ))}
    </div>
  </div>
)

export default Project
