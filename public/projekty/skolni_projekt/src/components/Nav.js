import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../App.css";

function Nav() {
  return (
    <div>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src="u_krvaveho_barona/images/logo.png" alt="logo" />
          </Link>
        </div>
        <ul>
          <li>
            <NavLink
              exact
              to="u_krvaveho_barona/denni_menu"
              activeClassName="active"
            >
              Denní menu
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="u_krvaveho_barona/stala_nabidka"
              activeClassName="active"
            >
              Stálá nabídka
            </NavLink>
          </li>
          <li>
            <NavLink exact to="u_krvaveho_barona" activeClassName="active">
              Domů
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="u_krvaveho_barona/kontakt"
              activeClassName="active"
            >
              Kontakt
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
