import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container header__container">
          <a href="/" className="logo">
            SingaCreator
          </a>
          <ul className="header__menu">
            <li>
              <Link to="/">New Signa</Link>
            </li>
            <li>
              <Link to="/list">List Signa</Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
