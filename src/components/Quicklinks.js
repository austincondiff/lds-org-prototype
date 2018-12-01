import React from 'react'
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

const styles = {
  quicklink: {
    textAlign: 'center',
    textDecoration: 'none',
    fontFamily: 'proxima-nova, sans-serif',
    fontWeight: '600',
    fontSize: '16px',
    color: '#000000',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    lineHeight: '1.25',
    flex: '1',
  },
  quicklinkIconWrap: {
    display: 'flex',
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quicklinkLabel: { display: 'block', marginTop: 16 },
}

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
      <div
        style={{
          padding: '48px 0',
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Link
          style={styles.quicklink}
          onMouseEnter={() => this.handleMouseOver('meetingHouseLocator')}
        >
          <span style={styles.quicklinkIconWrap}>
            {meetingHouseLocator && <MeetingHouseLocatorIcon />}
          </span>
          <span style={styles.quicklinkLabel}>Meetinghouse Locator</span>
        </Link>
        <Link
          style={styles.quicklink}
          onMouseEnter={() => this.handleMouseOver('study')}
        >
          <span style={styles.quicklinkIconWrap}>{study && <StudyIcon />}</span>
          <span style={styles.quicklinkLabel}>Study</span>
        </Link>
        <Link
          style={styles.quicklink}
          onMouseEnter={() => this.handleMouseOver('wardDirectory')}
        >
          <span style={styles.quicklinkIconWrap}>
            {wardDirectory && <WardDirectoryIcon />}
          </span>
          <span style={styles.quicklinkLabel}>Ward Directory</span>
        </Link>
        <Link
          style={styles.quicklink}
          onMouseEnter={() => this.handleMouseOver('wardCalendar')}
        >
          <span style={styles.quicklinkIconWrap}>
            {wardCalendar && <WardCalendarIcon />}
          </span>
          <span style={styles.quicklinkLabel}>Ward Calendar</span>
        </Link>
        <Link
          style={styles.quicklink}
          onMouseEnter={() => this.handleMouseOver('donate')}
        >
          <span style={styles.quicklinkIconWrap}>
            {donate && <DonateIcon />}
          </span>
          <span style={styles.quicklinkLabel}>Donate</span>
        </Link>
        <Link
          style={styles.quicklink}
          onMouseEnter={() => this.handleMouseOver('familySearch')}
        >
          <span style={styles.quicklinkIconWrap}>
            {familySearch && <FamilySearchIcon />}
          </span>
          <span style={styles.quicklinkLabel}>Family Search</span>
        </Link>
        <Link
          style={styles.quicklink}
          onMouseEnter={() => this.handleMouseOver('indexing')}
        >
          <span style={styles.quicklinkIconWrap}>
            {indexing && <IndexingIcon />}
          </span>
          <span style={styles.quicklinkLabel}>Indexing</span>
        </Link>
        <Link
          style={styles.quicklink}
          onMouseEnter={() => this.handleMouseOver('chat')}
        >
          <span style={styles.quicklinkIconWrap}>{chat && <ChatIcon />}</span>
          <span style={styles.quicklinkLabel}>Chat With Us</span>
        </Link>
      </div>
    )
  }
}

export default QuickLinks
