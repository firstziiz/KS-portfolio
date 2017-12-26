import React from 'react'
import { injectGlobal } from 'styled-components'

import Profile from '../components/Profile'
import Timeline from '../components/Timeline'

import Divider from '../components/Core/Divider'

injectGlobal`
  body {
    font-size: 12px;
  }
`

const Index = () => (
  <div>
    <Profile />
    <Divider />
    <Timeline />
  </div>
)

export default Index
