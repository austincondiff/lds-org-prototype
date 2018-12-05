import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Logo from '../images/logo.svg'
import data from '../data/navigation'
import Icon from './Icon'

const MenuColumn = styled.div`
  ${props => !props.noFlex && 'flex: 1;'}
  padding: 0 16px;
`
const MenuColumnWrap = styled.div`
  margin: 0 -16px 0 -16px;
  display: flex;
`
const MenuDescription = styled.div`
  font-family: adobe-garamond-pro, Garamond, Georgia, serif;
  font-size: 28px;
  color: #0096ac;
  line-height: 32px;
  align-self: center;
`
const DropdownArrow = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  border-left: 1.5px solid rgba(0, 0, 0, 0.33);
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.33);
  transform: ${props =>
    props.active ? 'rotate(-225deg) translate(2px, -2px)' : 'rotate(-45deg)'};
  margin: -5px 0 0 10px;
  transition: 150ms;
`
const InputWrap = styled.div`
  position: relative;
  margin-top: -8px;
  color: #006184;
`
const SearchInput = styled.input`
  border-radius: 64px;
  border: 2px solid #01b6d1;
  padding: 8px 16px 8px 48px;
  outline: 0;
  width: 100%;
  font-family: proxima-nova, sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #006184;
  &::placeholder {
    color: black;
  }
`
const SearchSelectInputWrap = styled(InputWrap)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
`
const Select = styled.select`
  appearance: none;
  background-color: #e7fbfd;
  border-radius: 64px;
  border: 2px solid #01b6d1;
  padding: 8px 48px;
  outline: 0;
  width: 100%;
  font-family: proxima-nova, sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #006184;
  transition: 150ms;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 0;
  &:hover {
    background-color: #daf7fb;
    box-shadow: rgba(0, 0, 0, 0.1) 0 8px 16px;
  }
  &:invalid {
    color: rgba(0, 0, 0, 0.5);
  }
`
const SelectIcon = styled(Icon)`
  position: absolute;
  top: 11px;
  left: 16px;
  pointer-events: none;
`
const SelectDropdownArrow = styled(DropdownArrow)`
  width: 8px;
  height: 8px;
  border-left: 2px solid #01b6d1;
  border-bottom: 2px solid #01b6d1;
  position: absolute;
  top: 22px;
  right: 22px;
  pointer-events: none;
`
const Button = styled.button`
  font-family: proxima-nova, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: white;
  text-align: left;
  padding: 8px 24px;
  background-color: #01b6d1;
  border: 0;
  outline: 0;
  border-radius: 64px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 0;
  transition: 150ms;
  cursor: pointer;
  &:hover {
    background-color: #03a5bd;
    box-shadow: rgba(0, 0, 0, 0.1) 0 8px 16px;
  }
`

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      menuMode: null,
      activeNavItem: null,
      region: 'US',
      language: 'EN',
      searchMode: 'everything',
    }
    this.searchInputRef = React.createRef()
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)

    this.setScrollStyles()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
  }

  componentDidUpdate() {
    if (this.state.menuMode === 'search' && this.searchInputRef)
      this.searchInputRef.current.focus()
  }

  handleScroll = () => window.requestAnimationFrame(this.setScrollStyles)

  setScrollStyles = () => {
    const scrollTop = document.documentElement.scrollTop
    const wrapEl = document.getElementById('headerWrap')
    const insideEl = document.getElementById('headerInside')
    const menuEl = document.getElementById('headerMenu')

    wrapEl.style.boxShadow =
      scrollTop > 48
        ? 'rgba(0, 0, 0, 0.15) 0px 16px 32px'
        : 'rgba(0, 0, 0, 0.05) 0px 0px 0px'
    insideEl.style.height = `${scrollTop < 48 ? 128 - scrollTop : 80}px`
    menuEl.style.paddingTop = `${scrollTop < 48 ? scrollTop / 2 : 24}px`
  }

  render() {
    const {
      scrollTop,
      activeNavItem,
      menuMode,
      language,
      region,
      searchMode,
    } = this.state

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
          id="headerWrap"
          style={{
            background: '#EFF0F0',
            transition: '200ms',
            position: 'relative',
            zIndex: 530,
          }}
        >
          <div
            id="headerInside"
            style={{
              margin: '0 auto',
              maxWidth: 1200,
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
                  {data.navigation.map(n => (
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
                          fontFamily: 'proxima-nova, sans-serif',
                          fontWeight: '600',
                          fontSize: '14px',
                          color:
                            activeNavItem && n.id === activeNavItem.id
                              ? '#0096AC'
                              : '#22282E',
                          textAlign: 'left',
                          textDecoration: 'none',
                          cursor: 'pointer',
                          display: 'flex',
                        }}
                        onClick={() =>
                          this.setState({
                            menuMode:
                              activeNavItem && activeNavItem.id === n.id
                                ? null
                                : 'nav',
                            activeNavItem:
                              activeNavItem && activeNavItem.id === n.id
                                ? null
                                : n,
                          })
                        }
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
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      cursor: 'pointer',
                    }}
                    onClick={() =>
                      this.setState({
                        menuMode: menuMode !== 'language' ? 'language' : null,
                        activeNavItem: null,
                      })
                    }
                  >
                    <Icon
                      name="earth"
                      style={{ color: menuMode === 'language' && '#0096ac' }}
                    />
                    <span
                      style={{
                        fontFamily: 'proxima-nova, sans-serif',
                        fontWeight: '600',
                        fontSize: '14px',
                        color: menuMode === 'language' ? '#0096ac' : '#000000',
                        marginLeft: 8,
                      }}
                    >
                      {language}/{region}
                    </span>
                    <DropdownArrow active={menuMode === 'language'} />
                  </div>
                  <div
                    style={{
                      paddingLeft: 16,
                      display: 'flex',
                      alignItems: 'center',
                      cursor: 'pointer',
                    }}
                    onClick={() =>
                      this.setState({
                        menuMode: menuMode !== 'account' ? 'account' : null,
                        activeNavItem: null,
                      })
                    }
                  >
                    <Icon
                      name="account"
                      style={{ color: menuMode === 'account' && '#0096ac' }}
                    />
                    <DropdownArrow active={menuMode === 'account'} />
                  </div>
                  <div
                    style={{
                      paddingLeft: 16,
                      display: 'flex',
                      alignItems: 'center',
                      cursor: 'pointer',
                    }}
                    onClick={() =>
                      this.setState({
                        menuMode: menuMode !== 'search' ? 'search' : null,
                        activeNavItem: null,
                      })
                    }
                  >
                    <Icon
                      name="magnify"
                      style={{ color: menuMode === 'search' && '#0096ac' }}
                    />
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
            opacity: menuMode ? 1 : 0,
            pointerEvents: !menuMode && 'none',
            transition: '150ms',
          }}
          onClick={() => this.setState({ menuMode: null, activeNavItem: null })}
        />
        <div
          id="headerMenu"
          style={{
            position: 'absolute',
            zIndex: 530,
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: '#EFF0F0',
            paddingBottom: 32,
            boxShadow: 'rgba(0, 0, 0, 0.15) 0px 16px 32px',
            opacity: menuMode ? 1 : 0,
            pointerEvents: !menuMode && 'none',
            transition: 'transform 150ms, opacity 150ms',
            transform: `translateY(${menuMode ? 0 : -50}%)`,
          }}
        >
          <div
            style={{
              margin: '0 auto',
              maxWidth: 1200,
            }}
          >
            {menuMode === 'nav' && (
              <MenuColumnWrap>
                <MenuColumn>
                  <MenuDescription>
                    {activeNavItem && activeNavItem.description}
                  </MenuDescription>
                </MenuColumn>
                {activeNavItem &&
                  activeNavItem.categories.map((cat, catI) => (
                    <MenuColumn key={`cat${catI}`}>
                      <h4
                        style={{
                          fontFamily: 'proxima-nova, sans-serif',
                          fontWeight: '700',
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
                              fontFamily: 'proxima-nova, sans-serif',
                              fontWeight: '600',
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
                    </MenuColumn>
                  ))}
              </MenuColumnWrap>
            )}

            {menuMode === 'language' && (
              <MenuColumnWrap>
                <MenuColumn noFlex>
                  <MenuDescription>
                    To every nation, kindred, tongue, and people
                  </MenuDescription>
                </MenuColumn>
                <MenuColumn>
                  <InputWrap>
                    <SelectIcon name="language" />
                    <Select
                      required
                      value={language}
                      onChange={e =>
                        this.setState({ language: e.target.value })
                      }
                    >
                      {data.languages.map(l => (
                        <option key={`language-${l.value}`} value={l.value}>
                          {l.label}
                        </option>
                      ))}
                    </Select>
                    <SelectDropdownArrow />
                  </InputWrap>
                </MenuColumn>
                <MenuColumn>
                  <InputWrap>
                    <SelectIcon name="pin" />
                    <Select
                      required
                      value={region}
                      onChange={e => this.setState({ region: e.target.value })}
                    >
                      {data.regions.map(r => (
                        <option key={`region-${r.value}`} value={r.value}>
                          {r.label}
                        </option>
                      ))}
                    </Select>
                    <SelectDropdownArrow />
                  </InputWrap>
                </MenuColumn>
              </MenuColumnWrap>
            )}
            {menuMode === 'account' && (
              <MenuColumnWrap>
                <MenuColumn>
                  <MenuDescription>
                    Be anxiously engaged in a good cause
                  </MenuDescription>
                </MenuColumn>
                {data.account.categories.map((cat, catI) => (
                  <MenuColumn key={`cat${catI}`}>
                    <h4
                      style={{
                        fontFamily: 'proxima-nova, sans-serif',
                        fontWeight: '700',
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
                            fontFamily: 'proxima-nova, sans-serif',
                            fontWeight: '600',
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
                  </MenuColumn>
                ))}
                <MenuColumn noFlex>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                    }}
                  >
                    <Button>Sign In</Button>
                  </div>
                </MenuColumn>
              </MenuColumnWrap>
            )}
            {menuMode === 'search' && (
              <MenuColumnWrap>
                <MenuColumn noFlex>
                  <MenuDescription>Search, ponder, and pray.</MenuDescription>
                </MenuColumn>
                <MenuColumn>
                  <InputWrap>
                    <Icon
                      name="magnify"
                      style={{
                        position: 'absolute',
                        top: 12,
                        left: 16,
                      }}
                    />
                    <SearchInput
                      type="text"
                      placeholder={`Search ${searchMode}`}
                      autoFocus
                      ref={this.searchInputRef}
                    />
                    <SearchSelectInputWrap>
                      <SelectIcon name="filter" />
                      <Select
                        value={searchMode}
                        onChange={e =>
                          this.setState({ searchMode: e.target.value })
                        }
                      >
                        <option value="everything">Everything</option>
                        <option value="scriptures">Scriptures</option>
                        <option value="general conference">
                          General Conference
                        </option>
                        <option value="magazines">Magazines</option>
                        <option value="videos">Videos</option>
                        <option value="images">Images</option>
                        <option value="topics">Topics</option>
                        <option value="news">News</option>
                      </Select>
                      <SelectDropdownArrow />
                    </SearchSelectInputWrap>
                  </InputWrap>
                </MenuColumn>
              </MenuColumnWrap>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Header
