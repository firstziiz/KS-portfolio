import React from 'react'
import styled from 'styled-components'

const MyselfWrapper = styled.div`
  margin-top: 1em;

  h1 {
    font-size: 3em;

    small {
      display: flex;
      justify-content: center;
      font-size: .4em;
      font-weight: 300;
    }
  }
`

const Metas = styled.div`
  display: flex;
  justify-content: center;

  .meta {
    display: flex;
    padding: 0 .5em;
    font-size: 1em;
    justify-content: center;
    align-items: center;
  }

  i.fa {
    padding-right: .3em;
  }
`

const ShortIntro = styled.p`
  font-size: 1.1em;
  padding: 1em;
`

const Myself = () => (
  <MyselfWrapper>
    <h1>
      KANISORN SUTHAM
      <small className="text-muted">Student / full-stack Developer</small>
    </h1>
    <Metas>
      <div className="meta location">
        <i className="fa fa-map-marker" />{` Bangkok, Thailand`}
      </div>
      <div className="meta site">
        <i className="fa fa-link" />{` https://ks.in.th`}
      </div>
      <div className="meta github">
        <i className="fa fa-github" />{` firstziiz`}
      </div>
      <div className="meta medium">
        <i className="fa fa-medium" />{` Medium`}
      </div>
    </Metas>
    <ShortIntro className="m-auto w-75">
      {`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur molestias, accusantium nostrum dolor rem placeat ipsum repellendus temporibus perferendis odit. Deserunt maiores repellendus assumenda rerum, exercitationem atque a amet voluptate.`}
    </ShortIntro>
  </MyselfWrapper>
)

export default Myself
