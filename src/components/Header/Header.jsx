import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button/Button';
import './header.css';
import Logo from '../Logo/Logo';

export const Header = ({}) => (
  <header>
    <div className="wrapper">
        <Logo></Logo>
        <a>PUB STARS</a>
    </div>
  </header>
);
