import React from 'react'
import styled, { css } from 'styled-components'
import Tag from '../Core/Tag'

const TimelineContainer = styled.ul`
  list-style: none;
  padding: 15px 0;
  position: relative;

  &:before {
    top: 0;
    bottom: 0;
    position: absolute;
    content: " ";
    width: 1px;
    background-color: #999;
    left: 50%;
    margin-left: -1.5px;
  }
`

const TimelineItem = styled.li`
  margin-bottom: 20px;
  position: relative;

  &:before {
    content: " ";
    display: table;
  }

  &:after {
    content: " ";
    display: table;
    clear: both;
  }

`

const TimelineBadge = styled.div`
  color: #333;
  width: 30px;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  text-align: center;
  position: absolute;
  top: 16px;
  left: 50%;
  margin-left: -16px;
  z-index: 100;
  border: 1px solid #999;
  background-color: #fff;
  border-radius: 50%;
`

const TimelinePanel = styled.div`
  width: 46%;
  border: 1px solid #d4d4d4;
  padding: 20px;
  position: relative;
  text-align: left;

  float: ${props => props.index % 2 === 0 ? 'left' : 'right'};

  &:before {
    position: absolute;
    top: 15px;
    right: -15px;
    display: inline-block;
    border-top: 15px solid transparent;
    border-left: 15px solid #ccc;
    border-right: 0 solid #ccc;
    border-bottom: 15px solid transparent;
    content: " ";

    ${props => props.index % 2 === 1 && css`
      border-left-width: 0;
      border-right-width: 15px;
      left: -15px;
      right: auto;
    `}
  }

  &:after {
    position: absolute;
    top: 16px;
    right: -14px;
    display: inline-block;
    border-top: 14px solid transparent;
    border-left: 14px solid #fff;
    border-right: 0 solid #fff;
    border-bottom: 14px solid transparent;
    content: " ";

    ${props => props.index % 2 === 1 && css`
      border-left-width: 0;
      border-right-width: 14px;
      left: -14px;
      right: auto;
    `}
  }
`

const TimelineHeader = styled.div`
  h3 {
    font-size: 1.6em;
    letter-spacing: -1px;

  }
`

const TimelineBody = styled.p`
  margin-bottom: 0
`

const TimelineTags = styled.div`
  margin-top: 10px;
  display: inline-block;
`

const Timeline = () => (
  <TimelineContainer>
    {
      [...Array(7)].map((item, index) => (
        <TimelineItem key={index}>
          <TimelineBadge>
            <i className="fa fa-user" />
          </TimelineBadge>
          <TimelinePanel className="timeline-panel" index={index}>
            <TimelineHeader>
              <p className="text-muted">
                Education <i aria-hidden="true" className="fa fa-hand-o-right" /> May 2015 <i className="fa fa-long-arrow-right" /> Current (1 year)
              </p>
              <hr />
              <h3>Information Technology, KMUTT</h3>
            </TimelineHeader>
            <TimelineBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quidem pariatur quaerat atque mollitia veniam velit dolorem exercitationem praesentium saepe? Quod libero ducimus et vitae provident maxime in, quis nulla.
            </TimelineBody>
            <TimelineTags>
              {
                [...Array(8)].map(e => (
                  <Tag
                    backend={true}
                  >
                    TAG BACKEND
                  </Tag>
                ))
              }
            </TimelineTags>
          </TimelinePanel>
        </TimelineItem>
      ))
    }
  </TimelineContainer>
)

export default Timeline
