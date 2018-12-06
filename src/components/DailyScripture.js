import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import QuoteIcon from '../images/quote.svg'

const Wrap = styled.div`
  margin: 0 auto;
  max-width: 1296px;
  width: 100%;
  padding: 48px;
  display: flex;
  @media (max-width: 1295px) {
    padding: 48px;
  }
  @media (max-width: 599px) {
    padding: 24px;
    flex-wrap: wrap;
  }
`
const QuoteWrap = styled.div`
  margin-top: 28px;
  margin-right: 32px;
  font-size: 0;
  line-height: 0;
  @media (max-width: 1295px) {
    margin-top: 28px;
    & svg {
      width: 48px;
    }
  }
  @media (max-width: 1023px) {
    margin-top: 20px;
    margin-right: 24px;
    & svg {
      width: 40px;
    }
  }
  @media (max-width: 767px) {
    margin-right: 20px;

    & svg {
      width: 32px;
    }
  }
  @media (max-width: 599px) {
    margin-top: 12px;
    margin-right: 16px;
  }
`
const Label = styled.div`
  font-family: proxima-nova, sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #888888;
  letter-spacing: 1px;
  line-height: 24px;
  text-transform: uppercase;
  margin-bottom: 4px;
  @media (max-width: 767px) {
    font-size: 11px;
  }
`
const ScriptureWrap = styled.div`
  flex: 1;
`
const Scripture = styled.p`
  font-family: adobe-garamond-pro, Garamond, Georgia, serif;
  font-size: 32px;
  line-height: 1;
  color: #0e0e0e;
  font-weight: normal;
  margin-bottom: 0;
  @media (max-width: 1295px) {
    font-size: 28px;
  }
  @media (max-width: 1023px) {
    font-size: 24px;
  }
  @media (max-width: 767px) {
    font-size: 20px;
  }
  @media (max-width: 599px) {
    font-size: 16px;
  }
`
const Reference = styled.div`
  opacity: 0.5;
  font-family: adobe-garamond-pro, Garamond, Georgia, serif;
  font-style: italic;
  font-size: 32px;
  color: #000000;
  text-align: right;
  line-height: 1;
  width: 20%;
  align-self: center;
  @media (max-width: 1295px) {
    font-size: 28px;
  }
  @media (max-width: 1023px) {
    font-size: 24px;
  }
  @media (max-width: 767px) {
    font-size: 20px;
  }
  @media (max-width: 599px) {
    font-size: 16px;
    width: 100%;
    text-align: left;
    margin-left: 48px;
  }
`

const DailyScripture = ({ scripture, reference }) => {
  return (
    <Wrap>
      <QuoteWrap>
        <QuoteIcon style={{}} />
      </QuoteWrap>
      <ScriptureWrap>
        <Label>Scripture of the Day</Label>
        <Scripture>{scripture}</Scripture>
      </ScriptureWrap>
      <Reference>–{reference}</Reference>
    </Wrap>
  )
}

export default DailyScripture
