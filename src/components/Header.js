import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/logo.svg'
import navData from '../data/navigation'
import Icon from './Icon'

class Header extends React.Component {
  constructor() {
    super()
    this.state = { scrollTop: false, activeNavItem: null }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  handleScroll() {
    window.requestAnimationFrame(() => {
      this.setState({ scrollTop: document.documentElement.scrollTop })
    })
  }

  render() {
    const { scrollTop, activeNavItem } = this.state
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          left: 0,
          zIndex: 500,
        }}
      >
        <div
          style={{
            background: '#EFF0F0',
            boxShadow: scrollTop > 48 && '0 4px 4px 0 rgba(0,0,0,0.25)',
            transition: '200ms',
            position: 'relative',
            zIndex: 530,
          }}
        >
          <div
            style={{
              margin: '0 auto',
              maxWidth: 1200,
              height: scrollTop < 48 ? 128 - scrollTop : 80,
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                display: 'flex',
                top: '30%',
                right: 0,
                bottom: '30%',
                left: 0,
              }}
            >
              <h1 style={{ margin: 0, fontSize: 0, height: '100%' }}>
                <Link
                  to="/"
                  style={{
                    color: 'black',
                    textDecoration: 'none',
                    height: '100%',
                    display: 'block',
                  }}
                >
                  <Logo style={{ width: 'auto', height: '100%' }} />
                </Link>
              </h1>
              <nav
                style={{
                  flex: '1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}
              >
                <ul
                  style={{
                    margin: 0,
                    padding: 0,
                    listStyle: 'none',
                    marginRight: -16,
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  {navData.map(n => (
                    <li
                      key={n.id}
                      style={{
                        margin: '0 16px',
                        padding: 0,
                        listStyle: 'none',
                        display: 'inline-block',
                      }}
                    >
                      <div
                        style={{
                          display: 'inline-block',
                          fontFamily: 'ProximaNova-Semibold',
                          fontSize: '14px',
                          color:
                            activeNavItem && n.id === activeNavItem.id
                              ? '#0096AC'
                              : '#22282E',
                          textAlign: 'left',
                          textDecoration: 'none',
                          cursor: 'pointer',
                        }}
                        onClick={() => this.setState({ activeNavItem: n })}
                      >
                        {n.label}
                      </div>
                    </li>
                  ))}
                </ul>
                <div
                  style={{
                    padding: '8px 0 8px 32px',
                    marginLeft: 32,
                    display: 'inline-block',
                    borderLeft: '1px solid rgba(0,0,0,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Icon name="earth" />
                    <span
                      style={{
                        fontFamily: 'ProximaNova-Semibold',
                        fontSize: '14px',
                        color: '#000000',
                        marginLeft: 8,
                      }}
                    >
                      US/EN
                    </span>
                    <span
                      style={{
                        display: 'inline-block',
                        width: 6,
                        height: 6,
                        borderLeft: '1.5px solid rgba(0,0,0,0.33)',
                        borderBottom: '1.5px solid rgba(0,0,0,0.33)',
                        transform: 'rotate(-45deg)',
                        margin: '-5px 0 0 10px',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      paddingLeft: 16,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Icon name="account" />
                    <span
                      style={{
                        display: 'inline-block',
                        width: 6,
                        height: 6,
                        borderLeft: '1.5px solid rgba(0,0,0,0.33)',
                        borderBottom: '1.5px solid rgba(0,0,0,0.33)',
                        transform: 'rotate(-45deg)',
                        margin: '-5px 0 0 4px',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      paddingLeft: 16,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Icon name="magnify" />
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div
          style={{
            position: 'fixed',
            zIndex: 510,
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: 'rgba(239, 240, 240, 0.5)',
            opacity: activeNavItem ? 1 : 0,
            pointerEvents: !activeNavItem && 'none',
            transition: '150ms',
          }}
          onClick={() => this.setState({ activeNavItem: null })}
        />
        <div
          style={{
            position: 'absolute',
            zIndex: 530,
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: '#EFF0F0',
            paddingTop: 16,
            paddingBottom: 32,
            boxShadow: '0 4px 4px 0 rgba(0,0,0,0.25)',
            opacity: activeNavItem ? 1 : 0,
            pointerEvents: !activeNavItem && 'none',
            transition: '150ms',
            transform: `translateY(${activeNavItem ? 0 : -50}%)`,
          }}
        >
          <div
            style={{
              margin: '0 auto',
              maxWidth: 1200,
            }}
          >
            <div style={{ margin: '0 -16px 0 -16px', display: 'flex' }}>
              <div
                style={{
                  fontFamily: 'Garamond',
                  fontSize: '28px',
                  color: '#0096AC',
                  lineHeight: '32px',
                  flex: '1',
                  padding: '0 16px',
                  alignSelf: 'center',
                }}
              >
                {activeNavItem && activeNavItem.description}
              </div>
              {activeNavItem &&
                activeNavItem.categories.map((cat, catI) => (
                  <div
                    style={{
                      flex: '1',
                      padding: '0 16px',
                    }}
                    key={`cat${catI}`}
                  >
                    <h4
                      style={{
                        fontFamily: 'ProximaNova-Bold',
                        fontSize: '13px',
                        color: '#8F8F8F',
                        letterSpacing: '0.1px',
                        textTransform: 'uppercase',
                        marginBottom: 16,
                      }}
                    >
                      {cat.label}
                    </h4>
                    <ul style={{ margin: 0, padding: 0 }}>
                      {cat.items.map((item, itemI) => (
                        <li
                          style={{
                            margin: '4px 0',
                            padding: 0,
                            listStyle: 'none',
                            fontFamily: 'ProximaNova-Semibold',
                            fontSize: '13px',
                          }}
                          key={`navLink${itemI}`}
                        >
                          <Link
                            style={{
                              color: '#000000',
                              textDecoration: 'none',
                            }}
                            to={item.path}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
