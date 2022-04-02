import React, { useState, useEffect } from 'react';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Logo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  LanguagesContainer,
  GR,
  EN,
} from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import { animateScroll } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import ChangeLanguage from '../Reusable/reusable';

const Navbar = (props) => {
  const { toggle } = props;

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY > 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    animateScroll.scrollToTop();
  };

  const { t } = useTranslation();

  // const changeLanguage = (ln) => {
  //   return () => {
  //     i18n.changeLanguage(ln);
  //     console.log(`Language changed to ${ln}`);
  //   };
  // };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <Logo scrollNav={scrollNav}>Apergis Knitwear</Logo>
          </NavLogo>

          <MobileIcon onClick={toggle} scrollNav={scrollNav}>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks
                scrollNav={scrollNav}
                to="hero"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-80}
              >
                {t('menu_home_link')}
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                scrollNav={scrollNav}
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-80}
              >
                {t('menu_about_link')}
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                scrollNav={scrollNav}
                to="services"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-80}
              >
                {t('menu_services_link')}
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                scrollNav={scrollNav}
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-80}
              >
                {t('menu_contact_link')}
              </NavLinks>
            </NavItem>

            {/* <NavItem>
              <FlagsContainer>
                <Greece>
                  <img src={greeceFlag} alt="Greece Flag" />
                </Greece>
                <USA>
                  <img src={usaFlag} alt="USA Flag" />
                </USA>
              </FlagsContainer>
            </NavItem> */}

            <NavItem>
              <LanguagesContainer>
                <GR scrollNav={scrollNav} onClick={ChangeLanguage('gr')}>
                  GR
                </GR>
                <EN scrollNav={scrollNav} onClick={ChangeLanguage('en')}>
                  EN
                </EN>
              </LanguagesContainer>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
