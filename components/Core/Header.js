import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  margin: 20px auto 10px;
  font-size: 12px;
  display: table;
  border: 1px solid #999;
  text-align: center;
  padding: 6px 22px;
  position: relative;
`

const HeaderTitle = styled.h2`
  padding: 8px 20px;
  margin: 0;
  font-size: 24px;
`

const HeaderSubTitle = styled.span`
  position: absolute;
  top: -10px;
  padding: 2px 5px;
  left: 50%;
  font-size: 12px;
  transform: translateX(-50%);
  text-transform: uppercase;
  background-color: #fff;
  width: 70%;
`

const Header = ({ title, subtitle }) => (
  <HeaderWrapper>
    <HeaderTitle>{ title }</HeaderTitle>
    <HeaderSubTitle>{ subtitle }</HeaderSubTitle>
  </HeaderWrapper>
)

export default Header
