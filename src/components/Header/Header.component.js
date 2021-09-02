import React from "react";
// import "./Header.styles.css";

import navSRC from "../../assets/nav.svg";
import { Nav } from "../Nav/Nav.component";

export function Header() {
  return (
    <header className="header central-page-alignment">
      <h1 className="header__title">Edie</h1>
      <button className="menu-button">
        <img src={navSRC} alt="nav button" />
      </button>

      <nav className="header__nav-bar">
        <Nav />
      </nav>
    </header>
  );
}
