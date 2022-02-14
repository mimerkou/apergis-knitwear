import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#fff' : 'transparent')};
  height: 8rem;
  margin-top: -8rem;
  box-shadow: ${({ scrollNav }) =>
    scrollNav ? '0 0 5px rgba(197, 157, 95, 0.9)' : 'transparent'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: all 0.8s ease;

  @media screen and (max-width: 960px) {
    transition: all 0.8s ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 8rem;
  z-index: 1;
  width: 100%;
  padding: 0 2.4rem;
  max-width: 120rem;
`;

export const NavLogo = styled(LinkRouter)`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2.4rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

export const Logo = styled.a`
  color: ${({ scrollNav }) => (scrollNav ? '#252525' : '#fff')};
  font-family: 'Herr Von Muellerhoff', cursive;
  font-size: 4rem;
  font-weight: 100;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2.9rem;
    color: ${({ scrollNav }) => (scrollNav ? '#252525' : '#fff')};
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -2.2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 8rem;
`;

export const NavLinks = styled(LinkScroll)`
  color: ${({ scrollNav }) => (scrollNav ? '#252525' : '#fff')};
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0 1.6rem;
  height: 100%;
  cursor: pointer;
  position: relative;

  &.active,
  &:hover {
    color: #c59d5f;
    transition: all 0.3s;
  }
`;
