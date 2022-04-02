import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkScroll } from 'react-scroll';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #252525;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.9rem;
  right: 2.4rem;
  background: transparent;
  font-size: 3.2rem;
  cursor: pointer;
  outline: none;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  text-decoration: none;
  list-style: none;
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  padding: 3rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &.active {
    color: #c59d5f;
    transition: all 0.3s ease-in-out;
  }
`;

export const LanguagesContainer = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GR = styled.p`
  margin-right: 1.5rem;
  font-size: 2rem;
  color: ${({ scrollNav }) => (scrollNav ? '#252525' : '#fff')};
  cursor: pointer;

  &.active,
  &:hover {
    color: #c59d5f;
    transition: all 0.3s;
  }
`;

export const EN = styled.p`
  font-size: 2rem;
  color: ${({ scrollNav }) => (scrollNav ? '#252525' : '#fff')};
  cursor: pointer;

  &.active,
  &:hover {
    color: #c59d5f;
    transition: all 0.3s;
  }
`;
