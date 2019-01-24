import React from 'react'
import Layout from 'components/Core/Layout'

import Welcome from 'components/Home/Welcome'
import Now from 'components/Home/Now'
import Experience from 'components/Home/Experience'
import Project from 'components/Home/Project'
import Blogs from 'components/Home/Blogs'

import content from 'content'

export default () => (
  <Layout>
    <Welcome profile={content.profile} />
    <Now now={content.now} />
    <Experience exps={content.experiences} />
    <Project projects={content.projects} />
    <Blogs />
  </Layout>
)
