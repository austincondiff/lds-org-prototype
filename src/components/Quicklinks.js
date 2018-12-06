import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import QuoteIcon from '../images/quote.svg'
import MeetingHouseLocatorIcon from '../images/meetinghouse-locator.svg'
import StudyIcon from '../images/study.svg'
import WardDirectoryIcon from '../images/ward-directory.svg'
import WardCalendarIcon from '../images/ward-calendar.svg'
import DonateIcon from '../images/donate.svg'
import FamilySearchIcon from '../images/family-search.svg'
import IndexingIcon from '../images/indexing.svg'
import ChatIcon from '../images/chat.svg'

const QuicklinksWrap = styled.div`
  padding: 48px;
  max-width: 1296px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1023px) {
    flex-wrap: wrap;
    padding: 0 48px;
  }
  @media (max-width: 599px) {
    padding: 0 24px;
  }
`
const Quicklink = styled.div`
  text-align: center;
  text-decoration: none;
  font-family: proxima-nova, sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.25;
  flex: 1;
  @media (max-width: 1023px) {
    width: 25%;
    flex: auto;
    padding: 4%;
  }
  @media (max-width: 767px) {
    font-size: 12px;
    & svg {
      width: 80%;
      height: auto;
    }
  }
`
const QuicklinkIconWrap = styled.span`
  display: flex;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  @media (max-width: 599px) {
    width: auto;
    height: auto;
  }
`
const QuicklinkLabel = styled.span`
  display: block;
  margin-top: 16px;
  @media (max-width: 767px) {
    margin-bottom: 4px;
  }
`

class QuickLinks extends React.Component {
  state = {
    meetingHouseLocator: true,
    study: true,
    wardDirectory: true,
    wardCalendar: true,
    donate: true,
    familySearch: true,
    indexing: true,
    chat: true,
  }

  handleMouseOver = key =>
    this.setState({ [key]: false }, () => this.setState({ [key]: true }))

  render() {
    const {
      meetingHouseLocator,
      study,
      wardDirectory,
      wardCalendar,
      donate,
      familySearch,
      indexing,
      chat,
    } = this.state

    return (
      <QuicklinksWrap>
        <Quicklink
          onMouseEnter={() => this.handleMouseOver('meetingHouseLocator')}
        >
          <QuicklinkIconWrap>
            {meetingHouseLocator && <MeetingHouseLocatorIcon />}
          </QuicklinkIconWrap>
          <QuicklinkLabel>Meetinghouse Locator</QuicklinkLabel>
        </Quicklink>
        <Quicklink onMouseEnter={() => this.handleMouseOver('study')}>
          <QuicklinkIconWrap>{study && <StudyIcon />}</QuicklinkIconWrap>
          <QuicklinkLabel>Study</QuicklinkLabel>
        </Quicklink>
        <Quicklink onMouseEnter={() => this.handleMouseOver('wardDirectory')}>
          <QuicklinkIconWrap>
            {wardDirectory && <WardDirectoryIcon />}
          </QuicklinkIconWrap>
          <QuicklinkLabel>Ward Directory</QuicklinkLabel>
        </Quicklink>
        <Quicklink onMouseEnter={() => this.handleMouseOver('wardCalendar')}>
          <QuicklinkIconWrap>
            {wardCalendar && <WardCalendarIcon />}
          </QuicklinkIconWrap>
          <QuicklinkLabel>Ward Calendar</QuicklinkLabel>
        </Quicklink>
        <Quicklink onMouseEnter={() => this.handleMouseOver('donate')}>
          <QuicklinkIconWrap>{donate && <DonateIcon />}</QuicklinkIconWrap>
          <QuicklinkLabel>Donate</QuicklinkLabel>
        </Quicklink>
        <Quicklink onMouseEnter={() => this.handleMouseOver('familySearch')}>
          <QuicklinkIconWrap>
            {familySearch && <FamilySearchIcon />}
          </QuicklinkIconWrap>
          <QuicklinkLabel>Family Search</QuicklinkLabel>
        </Quicklink>
        <Quicklink onMouseEnter={() => this.handleMouseOver('indexing')}>
          <QuicklinkIconWrap>{indexing && <IndexingIcon />}</QuicklinkIconWrap>
          <QuicklinkLabel>Indexing</QuicklinkLabel>
        </Quicklink>
        <Quicklink onMouseEnter={() => this.handleMouseOver('chat')}>
          <QuicklinkIconWrap>{chat && <ChatIcon />}</QuicklinkIconWrap>
          <QuicklinkLabel>Chat With Us</QuicklinkLabel>
        </Quicklink>
      </QuicklinksWrap>
    )
  }
}

export default QuickLinks
