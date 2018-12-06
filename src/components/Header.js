import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Logo from '../images/logo.svg'
import data from '../data/navigation'
import Icon from './Icon'

const HeaderLayout = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 500;
`
const HeaderWrap = styled.div`
  background: #eff0f0;
  transition: 200ms;
  position: relative;
  z-index: 530;
`
const HeaderInside = styled.div`
  margin: 0 auto;
  max-width: 1296px;
  width: 100%;
  padding: 0 48px;
  align-items: center;
  position: relative;
  @media (max-width: 1295px) {
    height: 80px !important;
  }
  @media (max-width: 599px) {
    height: 64px !important;
    padding: 0 24px;
  }
`
const HeaderContent = styled.div`
  position: absolute;
  display: flex;
  top: 30%;
  right: 48px;
  bottom: 30%;
  left: 48px;
  @media (max-width: 599px) {
    top: 25%;
    right: 24px;
    bottom: 25%;
    left: 24px;
  }
`
const NavItemsWrap = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-right: -16px;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 1295px) {
    margin: 0;
    padding: 0;
    justify-content: center;
    flex: 1;
  }
  @media (max-width: 1023px) {
    display: none;
  }
`
const NavItem = styled.div`
  display: inline-block;
  font-family: proxima-nova, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: ${props =>
    props.activeNavItem && props.itemId === props.activeNavItem.id
      ? '#0096AC'
      : '#22282E'};
  text-align: left;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  @media (max-width: 1295px) {
    font-size: 12px;
  }
  @media (max-width: 899px) {
    font-size: 12px;
  }
`
const IconsWrap = styled.div`
  padding: 8px 0 8px 32px;
  margin-left: 32px;
  display: inline-block;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  @media (max-width: 1295px) {
    padding: 0;
    margin-left: 8px;
    border: 0;
  }
`
const MenuShade = styled.div`
  position: fixed;
  z-index: 510;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(239, 240, 240, 0.5);
  opacity: ${props => (props.menuMode ? 1 : 0)};
  ${props => !props.menuMode && 'pointer-events: none;'}
  transition: 150ms;
`
const Menu = styled.div`
  position: absolute;
  z-index: 530;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #eff0f0;
  padding-bottom: 32px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 16px 32px;
  opacity: ${props => (props.menuMode ? 1 : 0)};
  ${props => !props.menuMode && 'pointer-events: none;'}
  transition: transform 150ms, opacity 150ms;
  transform: translateY(${props => (props.menuMode ? 0 : -50)}%);
  @media (max-width: 1295px) {
    padding-top: 0 !important;
    padding-bottom: 16px;
  }
`
const MenuContentWrap = styled.div`
  margin: 0 auto;
  max-width: 1296px;
  width: 100%;
  padding: 0 48px;
  @media (max-width: 599px) {
    padding: 0 24px;
  }
`
const MenuColumn = styled.div`
  ${props => !props.noFlex && 'flex: 1;'}
  padding: 0 16px;
`
const MenuDescriptionColumn = styled(MenuColumn)`
  @media (max-width: 1023px) {
    display: none;
  }
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
  @media (max-width: 1295px) {
    display: none;
  }
`
const IconLabel = styled.span`
  font-family: proxima-nova, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: ${props => (props.active ? '#0096ac' : '#000000')};
  margin-left: 8px;
  @media (max-width: 1295px) {
    display: none;
  }
`
const InputWrap = styled.div`
  position: relative;
  margin-top: -8px;
  color: #006184;
  @media (max-width: 767px) {
    margin: 0;
  }
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
  @media (max-width: 767px) {
    display: none;
  }
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
  @media (max-width: 1295px) {
    display: inline-block;
  }
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
const NavWrap = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 1023px) {
    flex: 1;
  }
`
const MenuButtonWrap = styled.div`
  width: 104px;
  margin-right: 8px;
  display: none;
  align-items: center;
  @media (max-width: 1023px) {
    margin: 0;
    display: flex;
    flex: 1;
  }
`
const MenuButton = styled.div`
  align-items: center;
  @media (max-width: 1023px) {
    display: flex;
  }
`
const LogoWrap = styled.h1`
  margin: 0;
  font-size: 0;
  height: 100%;
  display: flex;
  @media (max-width: 1023px) {
    flex: 1;
    justify-content: center;
  }
`
const LanguageButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (max-width: 599px) {
    display: none;
  }
`
const AccountButton = styled.div`
  padding-left: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (max-width: 599px) {
    display: none;
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
      <HeaderLayout>
        <HeaderWrap id="headerWrap">
          <HeaderInside id="headerInside">
            <HeaderContent>
              <MenuButtonWrap>
                <MenuButton>
                  <Icon name="menu" />
                </MenuButton>
              </MenuButtonWrap>
              <LogoWrap>
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
              </LogoWrap>
              <NavWrap>
                <NavItemsWrap>
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
                      <NavItem
                        activeNavItem={activeNavItem}
                        itemId={n.id}
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
                      </NavItem>
                    </li>
                  ))}
                </NavItemsWrap>
                <IconsWrap>
                  <LanguageButton
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
                    <IconLabel active={menuMode === 'language'}>
                      {language}/{region}
                    </IconLabel>
                    <DropdownArrow active={menuMode === 'language'} />
                  </LanguageButton>
                  <AccountButton
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
                  </AccountButton>
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
                </IconsWrap>
              </NavWrap>
            </HeaderContent>
          </HeaderInside>
        </HeaderWrap>
        <MenuShade
          menuMode={menuMode}
          onClick={() => this.setState({ menuMode: null, activeNavItem: null })}
        />
        <Menu id="headerMenu" menuMode={menuMode}>
          <MenuContentWrap>
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
                <MenuDescriptionColumn noFlex>
                  <MenuDescription>
                    To every nation, kindred, tongue, and people
                  </MenuDescription>
                </MenuDescriptionColumn>
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
                <MenuDescriptionColumn>
                  <MenuDescription>
                    Be anxiously engaged in a good cause
                  </MenuDescription>
                </MenuDescriptionColumn>
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
                <MenuDescriptionColumn noFlex>
                  <MenuDescription>Search, ponder, and pray.</MenuDescription>
                </MenuDescriptionColumn>
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
          </MenuContentWrap>
        </Menu>
      </HeaderLayout>
    )
  }
}

export default Header
