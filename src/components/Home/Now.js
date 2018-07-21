import React from 'react'
import styled from 'styled-components'

const Current = styled.div`
  /* font-style: italic; */
`

const Now = () => (
  <div className="container py-4">
    <div className="pb-2">
      <h2 className="mb-0">Now.</h2>
      <span className="d-block text-muted">
        People often ask me what I’m doing now. I’m currently:
      </span>
    </div>
    <Current>
      <ul className="m-0">
        {[...Array(6)].map((list, index) => (
          <li key={index}>Building a pattern library for an NY-based theatre company</li>
        ))}
      </ul>
      <p className="small pl-2">Updated: Jul 2018</p>
    </Current>
  </div>
)

export default Now
