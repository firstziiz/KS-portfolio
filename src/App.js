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
    letter-spacing: 0.012em;
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
    transition: all 0.4s;
    font-style: italic;
    border-bottom: 1px dotted #777;

    &.no-border-bottom {
      border-bottom: 0;
    }

    &:hover,
    &:active,
    &:focus {
      color: #ff2222;
      border-bottom: 1px dotted #ff2222;
      text-decoration: none !important;

      &.no-border-bottom {
        border-bottom: 0;
      }
      > h4 {
        color: #ff2222;
      }
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
