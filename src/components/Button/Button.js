import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
import './Button.css';

const Button = (props) => {
  const { path, darkBg, children } = props;

  return (
    <LinkScroll
      to={path}
      className={darkBg ? 'btn darkBg' : 'btn'}
      smooth={true}
      spy={true}
      offset={-80}
    >
      {children}
    </LinkScroll>
  );
};

export default Button;
