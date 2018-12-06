import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Transition from 'react-transition-group/Transition'

const HeroWrap = styled(Link)`
  display: block;
  width: 100%;
  background-color: #333;
  padding-top: 40%;
  position: relative;
  @media (max-width: 1023px) {
    margin: 48px 48px 0 48px;
    width: auto;
  }
  @media (max-width: 599px) {
    padding-top: 55%;
    font-size: 24px;
    margin: 24px 24px 0 24px;
  }
`
const TextProtection = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.5) 20%,
    rgba(0, 0, 0, 0) 80%
  );
  @media (max-width: 1023px) {
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.5) 20%,
      rgba(0, 0, 0, 0) 80%
    );
  }
`
const TextLayoutWrap = styled.div`
  max-width: 1296px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 128px 48px;
  @media (max-width: 1295px) {
    padding: 4% 48px;
  }
  @media (max-width: 599px) {
    padding: 4% 24px;
  }
`
const TextLayout = styled.div`
  width: 50%;
  @media (max-width: 1023px) {
    width: auto;
  }
`
const PostCategory = styled.div`
  font-family: proxima-nova, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
  text-align: left;
  text-transform: uppercase;
  padding: 7px 8px 5px 8px;
  background-color: #01b6d1;
  display: inline-block;
  align-self: flex-start;
  line-height: 1;
  @media (max-width: 767px) {
    font-size: 12px;
    padding: 5px 6px 3px 6px;
  }
`
const PostTitle = styled.div`
  font-family: adobe-garamond-pro, Garamond, Georgia, serif;
  font-size: 48px;
  color: #ffffff;
  text-align: left;
  line-height: 1;
  margin: 12px 0;
  @media (max-width: 1295px) {
    font-size: 40px;
  }
  @media (max-width: 1023px) {
    font-size: 32px;
  }
  @media (max-width: 599px) {
    font-size: 24px;
  }
`
const PostSubtitle = styled.div`
  opacity: 0.9;
  font-family: proxima-nova, sans-serif;
  font-weight: 300;
  font-size: 24px;
  color: #ffffff;
  text-align: left;
  line-height: 1.25;
  margin-bottom: 40px;
  @media (max-width: 1023px) {
    margin-bottom: 0;
    font-size: 20px;
  }
  @media (max-width: 599px) {
    font-size: 14px;
    font-weight: 400;
    opacity: 1;
  }
`
const PostExcerpt = styled.div`
  font-family: proxima-nova, sans-serif;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: left;
  line-height: 1.25;
  @media (max-width: 1023px) {
    display: none;
  }
`

const styles = {
  coverImg: {
    entering: { transform: 'scale(1.25)', opacity: 0 },
    entered: { transform: 'scale(1)', opacity: 1 },
  },
  contentWrap: {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
  },
}

class Hero extends React.Component {
  constructor() {
    super()
    this.state = { scrollTop: null, heroHeight: null }
    this.heroRef = React.createRef()
  }

  scrollTop = 0
  heroHeight = null

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
    this.setHeroHeight()
    this.setScrollStyles()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
  }

  handleScroll = () => window.requestAnimationFrame(this.setScrollStyles)

  setHeroHeight = () => {
    this.heroHeight =
      this.heroRef && this.heroRef.current && this.heroRef.current.clientHeight
  }

  setScrollStyles = () => {
    this.scrollTop = document.documentElement.scrollTop
    const coverImageEl = document.getElementById('heroCoverImage')

    coverImageEl.style.backgroundPosition = `50% ${33 -
      ((this.scrollTop / this.heroHeight) * 100) / 3}%`
  }

  handleResize = () => this.setHeroHeight()

  render() {
    const { title, subtitle, excerpt, image, category, link } = this.props

    return (
      <Transition in appear timeout={{ enter: 0 }}>
        {state => (
          <HeroWrap to={link}>
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                overflow: 'hidden',
              }}
              ref={this.heroRef}
            >
              <div
                id="heroCoverImage"
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  transform: 'scale(1.25)',
                  opacity: 0,
                  transition: 'opacity 2000ms, transform 2000ms',
                  ...styles.coverImg[state],
                }}
              />
            </div>
            <TextProtection />
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                transition: '2000ms',
                transitionDelay: '1000ms',
                opacity: 0,
                ...styles.contentWrap[state],
              }}
            >
              <TextLayoutWrap>
                <TextLayout>
                  <PostCategory>{category}</PostCategory>
                  <PostTitle>{title}</PostTitle>
                  <PostSubtitle>{subtitle}</PostSubtitle>
                  <PostExcerpt>{excerpt}</PostExcerpt>
                </TextLayout>
              </TextLayoutWrap>
            </div>
          </HeroWrap>
        )}
      </Transition>
    )
  }
}

export default Hero
