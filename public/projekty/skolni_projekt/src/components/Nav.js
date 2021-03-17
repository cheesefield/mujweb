import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../App.css";

function Nav() {
  return (
    <div>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src="/images/logo.png" alt="logo" />
          </Link>
        </div>
        <ul>
          <li>
            <NavLink exact to="/denni_menu" activeClassName="active">
              Denní menu
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/stala_nabidka" activeClassName="active">
              Stálá nabídka
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Domů
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/kontakt" activeClassName="active">
              Kontakt
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
