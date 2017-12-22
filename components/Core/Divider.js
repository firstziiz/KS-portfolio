import styled from 'styled-components'

const Divider = styled.div`
  text-align: center;
  border: 0;
  margin: 0;
  padding: 3em 0;
  &:before {
    content: '...';
    display: inline-block;
    margin-left: 1.4em;
    color: rgba(0,0,0,.7);
    position: relative;
    top: -.5em;
    font-style: italic;
    font-size: 1.2em;<P></P>
    letter-spacing: 1.4em;
  }
`

export default Divider
