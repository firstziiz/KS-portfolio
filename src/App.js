import React from 'react'
import { Router } from 'react-static'
import { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'

import Routes from 'react-static-routes'

injectGlobal`
  body {
    font-family: 'Roboto', Helvetica, Tamoha, sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
    color: #6c757d;
    background-color: #f8f9fa;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  button {
    color: #222;
    font-family: 'Lato', sans-serif;
    font-weight: 600;
  }

  a {
    &:hover {
      text-decoration: none !important;
    }
  }
`

const App = () => (
  <Router>
    <div>
      <Routes />
    </div>
  </Router>
)

export default hot(module)(App)
