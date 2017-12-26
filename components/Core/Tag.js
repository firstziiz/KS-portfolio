import styled, { css } from 'styled-components'

// Tag
const Tag = styled.div`
  cursor: pointer;
  padding: .4em .6em;
  display: inline-block;
  margin: .2em;
  font-size: 11px;
  text-align: center;
  border: 1px solid;
  transition: all .15s ease-in-out;
  border-color: transparent;

  ${props => props.backend && css`
    color: #e9573f;
    background-color: rgba(255,96,61,.15);
  `}

  ${props => props.frontend && css`
    color: #37bc9b;
    background-color: rgba(72,207,173,.15);
  `}

  ${props => props.utility && css`
    color: #967adc;
    background-color: rgba(172,146,236,.15);
  `}

  ${props => props.other && css`
    color: #434a54;
    background-color: rgba(101,109,130,.15);
  `}
`

export default Tag
