import React from "react";
// import "./Header.styles.css";

import navSRC from "../../assets/nav.svg";

export function Header() {
  return (
    <header className="header central-page-alignment">
      <h1 className="header__title">Edie</h1>
      <button className="menu-button">
        <img src={navSRC} alt="nav button" />
      </button>

      <nav className="header__nav-bar">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#our-work">Our Work</a>
          </li>
          <li>
            <a href="#clients">Clients</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
