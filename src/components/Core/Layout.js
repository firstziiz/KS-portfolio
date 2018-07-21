import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'

const Layout = ({ children }) => (
  <div>
    <Navbar />
    {/* <Sidebar /> */}
    {children}
    <Footer />
  </div>
)

export default Layout
