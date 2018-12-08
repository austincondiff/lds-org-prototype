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
  background-color: ${props => (props.showMobileMenu ? 'white' : '#eff0f0')};
  transition: box-shadow 200ms, background-color 250ms, max-height 250ms;
  position: relative;
  z-index: 530;
  @media (max-width: 1295px) {
    max-height: 80px;
  }
  @media (max-width: 1023px) {
    max-height: ${props => (props.showMobileMenu ? '100vh' : '80px')};
  }
  @media (max-width: 599px) {
    max-height: ${props => (props.showMobileMenu ? '100vh' : '64px')};
  }
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
  opacity: ${props => (props.show ? 1 : 0)};
  ${props => !props.show && 'pointer-events: none;'}
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
  ${props =>
    props.mobile &&
    `
    @media (max-width: 1023px) {
      padding: 16px;
      margin: 0;
      width: 50%;
      flex: initial;
    }
  `}
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
  color: ${props => (props.primary ? `white` : `#006184`)};
  text-align: left;
  padding: 8px 24px;
  background-color: ${props => (props.primary ? `#01b6d1` : `#e7fbfd`)};
  border: 2px solid #01b6d1;
  outline: 0;
  border-radius: 64px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 0;
  transition: 150ms;
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: ${props => (props.primary ? `#03a5bd` : `#daf7fb`)};
    box-shadow: rgba(0, 0, 0, 0.1) 0 8px 16px;
  }
  @media (max-width: 1023px) {
    font-size: 14px;
    padding: 5px 24px;
    width: 100%;
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
  transition: 250ms;
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
const MenuCategoryLabel = styled.h4`
  font-family: proxima-nova, sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #8f8f8f;
  letter-spacing: 0.1px;
  text-transform: uppercase;
  margin-bottom: 16px;
  @media (max-width: 599px) {
    font-size: 12px;
  }
`
const MenuCategoryItem = styled.li`
  margin: 16px 0;
  padding: 0;
  list-style: none;
  line-height: 1;
  font-family: proxima-nova, sans-serif;
  font-weight: 600;
  font-size: 13px;
  @media (max-width: 599px) {
    font-size: 12px;
  }
`
const MenuCategoryItemLink = styled(Link)`
  color: #000000;
  text-decoration: none;
`
const MobileMenu = styled.div`
  display: none;
  padding: 16px 0;
  opacity: ${props => (props.show ? 1 : 0)};
  ${props => !props.show && 'pointer-events: none;'}
  transition: 250ms;
  overflow: auto;
  overflow-x: hidden;
  overflow-y: auto;
  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 80px);
  }
  @media (max-width: 599px) {
    height: calc(100vh - 64px);
  }
`
const MobileNavItems = styled.ul`
  margin: 16px 0;
  padding: 0;
  width: 100%;
  padding-bottom: 30%;
`
const MobileNavItemWrap = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: ${props => (props.active ? '#f7f7f7' : 'transparent')};
  width: 100%;
  max-height: ${props => (props.active ? '100vh' : '50px')};
  overflow: hidden;
  transition: 250ms;
  @media (max-width: 767px) {
    max-height: ${props => (props.active ? '100vh' : '48px')};
  }
`
const MobileNavItem = styled.div`
  font-family: proxima-nova, sans-serif;
  font-weight: 700;
  font-size: 14px;
  list-style: none;
  display: flex;
  align-items: center;
  padding: 12px 48px;
  width: 100%;
  @media (max-width: 767px) {
    font-size: 13px;
  }
  @media (max-width: 599px) {
    padding: 12px 24px;
  }
`

const MobileDropdownWrap = styled.div`
  padding: 0 32px 12px 80px;
  flex-wrap: wrap;
  display: flex;
  @media (max-width: 599px) {
    padding: 0 8px 12px 56px;
  }
`

const PlusMinusToggle = styled.div`
  cursor: pointer;
  height: 12px;
  position: relative;
  width: 12px;
  margin-right: 28px;
  margin-left: 6px;
  &:before,
  &:after {
    background: #000;
    content: '';
    height: 1px;
    left: 0;
    position: absolute;
    top: 5px;
    width: 12px;
    transition: transform 500ms ease;
  }
  &:before {
    transform: rotate(${props => (props.expanded ? 0 : -180)}deg);
  }
  &:after {
    transform: rotate(${props => (props.expanded ? 0 : -90)}deg);
    transform-origin: center;
  }
}
`
const LayoutWrap = styled.div`
  width: 100%;
  padding: 0 48px;
  margin: 0 auto;
  max-width: 1296px;
  @media (max-width: 599px) {
    padding: 0 24px;
  }
`
const Row = styled.div`
  margin: -8px;
  display: flex;
`
const Col = styled.div`
  flex: 1;
  padding: 8px;
`
const FlairWrap = styled.div`
  position: absolute;
  margin-bottom: -85%;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: 500ms;
  transition-delay: 250ms;
  pointer-events: none;
`
const Flair1 = styled.div`
  opacity: ${props => (props.active ? 0.33 : 1)};
  background-color: #01b6d1;
  padding-top: 100%;
  transform: rotate(${props => (props.active ? 6 : 44)}deg);
  filter: blur(${props => (props.active ? 0 : 16)}px);
  position: absolute;
  bottom: 0;
  left: -50%;
  right: -50%;
  transition: 1000ms;
  transition-delay: 250ms;
`
const Flair2 = styled.div`
  opacity: ${props => (props.active ? 0.33 : 1)};
  background-color: #01b6d1;
  padding-top: 100%;
  transform: rotate(${props => (props.active ? -16 : -36)}deg);
  filter: blur(${props => (props.active ? 0 : 16)}px);
  position: absolute;
  bottom: 0;
  left: -50%;
  right: -50%;
  transition: 1000ms;
  transition-delay: 250ms;
`
const Flair3 = styled.div`
  opacity: ${props => (props.active ? 0.33 : 1)};
  background-color: #01b6d1;
  padding-top: 100%;
  transform: rotate(${props => (props.active ? -26 : -46)}deg);
  filter: blur(${props => (props.active ? 0 : 16)}px);
  position: absolute;
  bottom: 0;
  left: -50%;
  right: -50%;
  transition: 1000ms;
  transition-delay: 250ms;
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
      showMobileMenu: false,
      mobileMenuActiveItems: [],
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
      showMobileMenu,
      mobileMenuActiveItems,
    } = this.state

    return (
      <HeaderLayout>
        <HeaderWrap showMobileMenu={showMobileMenu} id="headerWrap">
          <HeaderInside id="headerInside">
            <HeaderContent>
              <MenuButtonWrap>
                <MenuButton
                  onClick={() =>
                    this.setState({
                      showMobileMenu: !showMobileMenu,
                      menuMode: null,
                    })
                  }
                >
                  <Icon name="menu" className={showMobileMenu && 'close'} />
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
                        mobileMenuActiveItems: [],
                        showMobileMenu: false,
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

          <MobileMenu show={showMobileMenu}>
            <LayoutWrap>
              <Row>
                <Col>
                  <Button>Who we are</Button>
                </Col>
                <Col>
                  <Button primary>Sign in</Button>
                </Col>
              </Row>
            </LayoutWrap>
            <MobileNavItems>
              {data.navigation.map(n => (
                <MobileNavItemWrap
                  active={
                    mobileMenuActiveItems &&
                    mobileMenuActiveItems.indexOf(n.id) !== -1
                  }
                >
                  <MobileNavItem
                    onClick={() =>
                      this.setState({
                        mobileMenuActiveItems:
                          mobileMenuActiveItems.indexOf(n.id) === -1
                            ? [...mobileMenuActiveItems, n.id]
                            : mobileMenuActiveItems.filter(m => m !== n.id),
                      })
                    }
                  >
                    <PlusMinusToggle
                      expanded={mobileMenuActiveItems.indexOf(n.id) !== -1}
                    />
                    {n.label}
                  </MobileNavItem>
                  <MobileDropdownWrap>
                    {n.categories.map((cat, catI) => (
                      <MenuColumn mobile key={`cat${catI}`}>
                        <MenuCategoryLabel>{cat.label}</MenuCategoryLabel>
                        <ul style={{ margin: 0, padding: 0 }}>
                          {cat.items.map((item, itemI) => (
                            <MenuCategoryItem key={`navLink${itemI}`}>
                              <MenuCategoryItemLink to={item.path}>
                                {item.label}
                              </MenuCategoryItemLink>
                            </MenuCategoryItem>
                          ))}
                        </ul>
                      </MenuColumn>
                    ))}
                  </MobileDropdownWrap>
                </MobileNavItemWrap>
              ))}
            </MobileNavItems>
            <FlairWrap active={showMobileMenu}>
              <Flair1 active={showMobileMenu} />
              <Flair2 active={showMobileMenu} />
              <Flair3 active={showMobileMenu} />
            </FlairWrap>
          </MobileMenu>
        </HeaderWrap>
        <MenuShade
          show={menuMode || showMobileMenu}
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
                      <MenuCategoryLabel>{cat.label}</MenuCategoryLabel>
                      <ul style={{ margin: 0, padding: 0 }}>
                        {cat.items.map((item, itemI) => (
                          <MenuCategoryItem key={`navLink${itemI}`}>
                            <MenuCategoryItemLink to={item.path}>
                              {item.label}
                            </MenuCategoryItemLink>
                          </MenuCategoryItem>
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
                    <Button primary>Sign In</Button>
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
                      onFocus={e => {
                        e.preventDefault()
                      }}
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
