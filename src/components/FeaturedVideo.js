import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import QuoteIcon from '../images/quote.svg'

const LayoutWrap = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  align-items: center;
  padding: 64px 0;
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
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  backgroundImage:
                    'linear-gradient(to top, rgba(0,0,0,0.5) 20%,rgba(0,0,0,0) 80%)',
                  display: 'flex',
                  padding: '48px 64px',
                  alignItems: 'flex-end',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translateX(-50%) translateY(-50%)',
                    padding: '24px 40px',
                    backgroundColor: 'rgba(1,182,209,0.8)',
                    borderRadius: 3,
                    boxShadow: '0px 0px 64px rgba(0,0,0,0.5)',
                  }}
                >
                  <div
                    style={{
                      display: 'block',
                      position: 'relative',
                      zIndex: '3',
                      width: '0',
                      height: '0',
                      borderLeft: '24px solid #fff',
                      borderTop: '14px solid transparent',
                      borderBottom: '14px solid transparent',
                    }}
                  />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'proxima-nova, sans-serif',
                      fontWeight: '700',
                      fontSize: '40px',
                      color: '#FFFFFF',
                      lineHeight: '32px',
                    }}
                  >
                    {title}
                  </div>
                  <div
                    style={{
                      fontFamily: 'proxima-nova, sans-serif',
                      fontWeight: '300',
                      fontSize: '20px',
                      color: '#FFFFFF',
                      lineHeight: '32px',
                      marginTop: '8px',
                    }}
                  >
                    {subtitle}
                  </div>
                </div>
              </div>
            ))}
        </VideoWrap>
      </LayoutWrap>
    )
  }
}

export default FeaturedVideo
