import React from 'react'
import Layout from 'components/Core/Layout'

import Welcome from 'components/Home/Welcome'
import Now from 'components/Home/Now'
import Experience from 'components/Home/Experience'
import Project from 'components/Home/Project'
import Blogs from 'components/Home/Blogs'

export default () => (
  <Layout>
    <Welcome />
    <Now />
    <Experience />
    <Project />
    <Blogs />
  </Layout>
)
