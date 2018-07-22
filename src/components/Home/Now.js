import React from 'react'
import styled from 'styled-components'
import convert from 'htmr'
const Current = styled.div`
  /* font-style: italic; */
`

const Now = ({ now }) => (
  <div className="container py-4">
    <div className="pb-2">
      <h2 className="mb-0">👨🏻‍💻 Now.</h2>
      <span className="d-block text-muted">
        People often ask me what I’m doing now. I’m currently:
      </span>
    </div>
    <Current>
      <ul className="m-0">{now.list.map((list, index) => <li key={index}>{convert(list)}</li>)}</ul>
      <p className="small pl-3 pt-2 mb-2">Updated: {now.updated}</p>
      <p className="small">
        <i>
          Inspired by{' '}
          <a href="https://sivers.org/now" target="_blank">
            Derek Sivers
          </a>{' '}
          and{' '}
          <a href="https://marcjenkins.co.uk/now/" target="_blank">
            MARC JENKINS
          </a>. If you have your own site,{' '}
          <a href="http://nownownow.com/about" target="_blank">
            you should make one
          </a>{' '}
          too.
        </i>
      </p>
    </Current>
  </div>
)

export default Now
