import React from 'react'
import { injectGlobal } from 'styled-components'

import Profile from '../components/Profile'
import Divider from '../components/Core/Divider'

injectGlobal`
  body {
    font-size: 12px;
    letter-spacing: .015em;
  }
`

const Index = () => (
  <div>
    <Profile />
    <Divider />
    {/* <Profile /> */}
  </div>
)

export default Index
