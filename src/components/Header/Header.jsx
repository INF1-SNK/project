import React from 'react';
import './header.css';
import Logo from '../Logo/Logo';
import Link from '../Link/Link';

export const Header = ({}) => (
  <header>
    <div className="wrapper">
        <Logo format='medium'></Logo>
        <Link content='PUB STARS' url='/'></Link>
    </div>
  </header>
);
