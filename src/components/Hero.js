import React from 'react'
import { Link } from 'gatsby'
import Transition from 'react-transition-group/Transition'

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

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this))
    window.addEventListener('resize', this.handleResize.bind(this))
    this.setState({
      scrollTop: document.documentElement.scrollTop,
      heroHeight:
        this.heroRef &&
        this.heroRef.current &&
        this.heroRef.current.clientHeight,
    })
  }

  handleScroll() {
    window.requestAnimationFrame(() => {
      this.setState({ scrollTop: document.documentElement.scrollTop })
    })
  }

  handleResize() {
    window.requestAnimationFrame(() => {
      this.setState({
        heroHeight:
          this.heroRef &&
          this.heroRef.current &&
          this.heroRef.current.clientHeight,
      })
    })
  }

  render() {
    const { title, subtitle, excerpt, image, category, link } = this.props
    const { scrollTop, heroHeight } = this.state

    return (
      <Transition in appear timeout={{ enter: 0 }}>
        {state => (
          <Link
            to={link}
            style={{
              display: 'block',
              width: '100%',
              backgroundColor: `#333`,
              paddingTop: '40%',
              position: 'relative',
            }}
          >
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
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: `50% ${33 -
                    ((scrollTop / heroHeight) * 100) / 3}%`,
                  transform: 'scale(1.25)',
                  opacity: 0,
                  transition: 'opacity 2000ms, transform 2000ms',
                  ...styles.coverImg[state],
                }}
              />
            </div>
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundImage:
                  'linear-gradient(to right, rgba(0,0,0,0.5) 20%,rgba(0,0,0,0) 80%)',
              }}
            />
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
              <div
                style={{
                  width: 1200,
                  height: '100%',
                  margin: '0 auto',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '128px 0',
                }}
              >
                <div style={{ width: '50%' }}>
                  <div
                    style={{
                      fontFamily: 'proxima-nova, sans-serif',
                      fontWeight: '700',
                      fontSize: '14px',
                      color: '#FFFFFF',
                      textAlign: 'left',
                      textTransform: 'uppercase',
                      padding: '7px 8px 5px 8px',
                      backgroundColor: '#01B6D1',
                      display: 'inline-block',
                      alignSelf: 'flex-start',
                      lineHeight: '1',
                    }}
                  >
                    {category}
                  </div>
                  <div
                    style={{
                      fontFamily:
                        'adobe-garamond-pro, Garamond, Georgia, serif',
                      fontSize: '48px',
                      color: '#FFFFFF',
                      textAlign: 'left',
                      lineHeight: '1',
                      margin: '12px 0',
                    }}
                  >
                    {title}
                  </div>
                  <div
                    style={{
                      opacity: '0.9',
                      fontFamily: 'proxima-nova, sans-serif',
                      fontWeight: '300',
                      fontSize: '24px',
                      color: '#FFFFFF',
                      textAlign: 'left',
                      lineHeight: '1.25',
                      marginBottom: 40,
                    }}
                  >
                    {subtitle}
                  </div>
                  <div
                    style={{
                      fontFamily: 'proxima-nova, sans-serif',
                      fontSize: '18px',
                      color: '#FFFFFF',
                      letterSpacing: '0',
                      textAlign: 'left',
                      lineHeight: '1.25',
                    }}
                  >
                    {excerpt}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )}
      </Transition>
    )
  }
}

export default Hero
