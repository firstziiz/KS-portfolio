import React from 'react'
import styled from 'styled-components'

import KS from 'static/ks-logo-transparent.png'

const NavbarWrapper = styled.div`
  justify-content: flex-start;
  padding: 0.4rem;
  position: absolute;
  width: 100%;
  font-size: 0.6rem;
  opacity: 0.6;
  align-items: center;

  img {
    height: 10px;
    margin-right: 0.2rem;
  }

  div {
    position: absolute;
    transform: rotate(-90deg);
    left: -5.2rem;
    transform-origin: center;
    top: 6.8rem;
  }
`

const Navbar = () => (
  <NavbarWrapper className="d-flex">
    <img src={KS} alt="" />
    <div>
      <b>KANISORN SUTHAM</b> / PERSONAL WEBSITE
    </div>
  </NavbarWrapper>
)

export default Navbar
