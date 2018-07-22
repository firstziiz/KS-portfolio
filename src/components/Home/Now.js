import React from 'react'
import styled from 'styled-components'

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
      <ul className="m-0">{now.list.map((list, index) => <li key={index}>{list}</li>)}</ul>
      <p className="small pl-3 pt-2">Updated: {now.updated}</p>
    </Current>
  </div>
)

export default Now
