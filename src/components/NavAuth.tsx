import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  to: string
  linkText: string
}

const NavAuth: React.FC<Props> = (props) => {
  return (
    <nav>
      <Link to={props.to}>{props.linkText}</Link>
    </nav>
  );
}

export default NavAuth;
