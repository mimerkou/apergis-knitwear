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
} from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import { animateScroll } from 'react-scroll';

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

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <Logo scrollNav={scrollNav}>Apergis Knitwear</Logo>
          </NavLogo>

          <MobileIcon onClick={toggle}>
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
                Αρχικη
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
                Εταιρεια
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
                Υπηρεσιες
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
                Επικοινωνια
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
