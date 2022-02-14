import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './SidebarElements';

const Sidebar = (props) => {
  const { isOpen, toggle } = props;

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="hero"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            onClick={toggle}
          >
            Αρχικη
          </SidebarLink>
          <SidebarLink
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            onClick={toggle}
          >
            Εταιρεια
          </SidebarLink>
          <SidebarLink
            to="services"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            onClick={toggle}
          >
            Υπηρεσιες
          </SidebarLink>
          <SidebarLink
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            onClick={toggle}
          >
            Επικοινωνια
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;