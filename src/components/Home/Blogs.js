import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { isEmpty } from 'ramda'

const BlogList = styled.div``

const BlogItem = styled.div`
  background-size: cover;
  background-position: center center;
  border-radius: 0.5rem;
`

class Blogs extends React.Component {
  state = {
    posts: []
  }

  async componentWillMount() {
    let posts = await axios
      .get(
        'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40Firstziiz'
      )
      .then(resp => resp.data.items.filter(item => !isEmpty(item.categories)))

    this.setState({
      posts
    })
  }

  render() {
    return (
      <div className="container py-4">
        <div className="pb-2">
          <h2 className="mb-0">Blogs.</h2>
          <span className="d-block text-muted">
            Knowledge, skill, experiences, lifestyle, I ever had share like article.
          </span>
        </div>
        <BlogList>
          {this.state.posts.map((post, index) => (
            <BlogItem key={index} className="blog p-2 my-2" imgBg={post.thumbnail}>
              {console.log(post)}
              <div className="time">{post.pubDate}</div>
              <a href={post.link}>
                <h4>{post.title}</h4>
              </a>
            </BlogItem>
          ))}
        </BlogList>
      </div>
    )
  }
}

export default Blogs
