import React from 'react'
import styled from 'styled-components'
import Tag from '../Core/Tag'

const TagsWrapper = styled.div`
  .tags {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  h4 {
    font-size: 1.1em;
    font-weight: 400;
  }
`

const Tags = ({ title, tags }) => (
  <TagsWrapper className="pt-2 pb-2">
    <h4>{ title }</h4>
    <div className="tags w-50 m-auto">
      {
        tags.map((tag, index) => (
          <Tag
            backend={tag.track === 'backend'}
            frontend={tag.track === 'frontend'}
            utility={tag.track === 'utility'}
            other={tag.track === 'other'}
          >
            {tag.title}
          </Tag>
        ))
      }
    </div>
  </TagsWrapper>
)

export default Tags
