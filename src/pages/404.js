import React from 'react'
import styled from 'styled-components'
import Layout from '../layouts'

const Wrap = styled.div`
  max-width: 1296px;
  width: 100%;
  margin: 0 auto;
  padding: 64px 48px;
  @media (max-width: 1295px) {
    padding: 48px;
  }
  @media (max-width: 599px) {
    padding: 24px;
  }
`
const Message = styled.div`
  padding: 64px 0;
  text-align: center;
  @media (max-width: 1295px) {
    padding: 48px 0;
  }
  @media (max-width: 599px) {
    padding: 24px 0;
  }
  p {
    font-family: proxima-nova, sans-serif;
    margin: 0;
  }
`

const NotFoundPage = () => (
  <Layout>
    <Wrap>
      <Message>
        <h1>Sorry, we couln't find what you were looking for.</h1>
        <p>
          The page you are trying to access doesn&#39;t exist or isn't available
          at the moment. Please try again later.
        </p>
      </Message>
    </Wrap>
  </Layout>
)

export default NotFoundPage
