import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  LanguagesContainer,
  GR,
  EN,
} from './SidebarElements';
import { useTranslation } from 'react-i18next';
import ChangeLanguage from '../Reusable/reusable';

const Sidebar = (props) => {
  const { isOpen, toggle } = props;

  const { t } = useTranslation();

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
            {t('menu_home_link')}
          </SidebarLink>

          <SidebarLink
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            onClick={toggle}
          >
            {t('menu_about_link')}
          </SidebarLink>

          <SidebarLink
            to="services"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            onClick={toggle}
          >
            {t('menu_services_link')}
          </SidebarLink>

          <SidebarLink
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            onClick={toggle}
          >
            {t('menu_contact_link')}
          </SidebarLink>

          <LanguagesContainer>
            <GR onClick={(toggle, ChangeLanguage('gr'))}>GR</GR>
            <EN onClick={(toggle, ChangeLanguage('en'))}>EN</EN>
          </LanguagesContainer>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
