import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to={'/'}>
          <FontAwesome name="home" />
        </Link>
      </div>
    );
  }
}

export default Header;
