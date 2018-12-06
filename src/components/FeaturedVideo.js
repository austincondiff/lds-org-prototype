import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import QuoteIcon from '../images/quote.svg'

const LayoutWrap = styled.div`
  margin: 0 auto;
  max-width: 1296px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 64px 48px;
  @media (max-width: 1295px) {
    padding: 48px;
  }
  @media (max-width: 599px) {
    padding: 24px;
  }
`
const VideoWrap = styled.div`
  width: 100%;
  padding-top: 56.25%;
  position: relative;
  cursor: ${props => props.video && 'pointer'};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px;
  transition: 300ms ease-in-out;
  background-color: black;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 8px 16px;
  }
`
const CoverImageWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`
const CoverImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  transform: scale(1.01);
  transition: 300ms ease-in-out;
  ${VideoWrap}:hover & {
    opacity: 0.75;
    transform: scale(1.075);
  }
`
const VideoMetaWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.5) 20%,
    rgba(0, 0, 0, 0) 80%
  );
  display: flex;
  padding: 48px 64px;
  align-items: flex-end;
  @media (max-width: 767px) {
    padding: 24px 32px;
  }
  @media (max-width: 599px) {
    padding: 16px 24px;
  }
`
const Title = styled.div`
  font-family: proxima-nova, sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: #ffffff;
  line-height: 1;
  @media (max-width: 1023px) {
    font-size: 32px;
  }
  @media (max-width: 767px) {
    font-size: 24px;
  }
`
const Subtitle = styled.div`
  font-family: proxima-nova, sans-serif;
  font-weight: 300;
  font-size: 20px;
  color: #ffffff;
  line-height: 1.15;
  margin-top: 8px;
  @media (max-width: 1023px) {
    font-size: 16px;
  }
  @media (max-width: 599px) {
    display: none;
  }
`
const PlayIndicator = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  padding: 24px 40px;
  background-color: rgba(1, 182, 209, 0.8);
  border-radius: 3px;
  box-shadow: 0px 0px 64px rgba(0, 0, 0, 0.5);
  @media (max-width: 767px) {
    padding: 12px 20px;
  }
`
const PlayIcon = styled.div`
  display: block;
  position: relative;
  z-index: 3;
  width: 0;
  height: 0;
  border-left: 24px solid #fff;
  border-top: 14px solid transparent;
  border-bottom: 14px solid transparent;
  @media (max-width: 767px) {
    border-left: 12px solid #fff;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
  }
`

class FeaturedVideo extends React.Component {
  constructor() {
    super()
    this.state = { showVideo: false }
  }

  render() {
    const { title, subtitle, image, video } = this.props
    const { showVideo } = this.state

    return (
      <LayoutWrap>
        <VideoWrap
          video={video}
          onClick={() =>
            video && !showVideo && this.setState({ showVideo: true })
          }
        >
          <CoverImageWrap>
            <CoverImage src={image} />
          </CoverImageWrap>
          {video &&
            (showVideo ? (
              <iframe
                title="youtube"
                frameborder="0"
                style={{
                  overflow: 'hidden',
                  overflowX: 'hidden',
                  overflowY: 'hidden',
                  height: '100%',
                  width: '100%',
                  position: 'absolute',
                  top: '0px',
                  left: '0px',
                  right: '0px',
                  bottom: '0px',
                }}
                height="100%"
                width="100%"
                src={`https://www.youtube.com/embed/${video}?autoplay=1`}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            ) : (
              <VideoMetaWrap>
                <PlayIndicator>
                  <PlayIcon />
                </PlayIndicator>
                <div>
                  <Title>{title}</Title>
                  <Subtitle>{subtitle}</Subtitle>
                </div>
              </VideoMetaWrap>
            ))}
        </VideoWrap>
      </LayoutWrap>
    )
  }
}

export default FeaturedVideo
