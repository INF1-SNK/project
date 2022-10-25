import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button/Button';
import './header.css';

export const Header = ({}) => (
  <header>
    <div className="wrapper">
      <div>
        <img src='public/assest/beer-logo.png'></img>
        <h1>PUB STARS</h1>
      </div>
    </div>
  </header>
);
