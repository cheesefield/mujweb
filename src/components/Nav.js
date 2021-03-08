import React, { useState, useEffect } from "react";
import { FaHome, FaUser, FaFile, FaPhoneAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Nav(props) {
  const [navbar, setNavbar] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [click, setClick] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100 + 0.2;

    setScrollTop(scrolled);
  };

  const handleClick = () => setClick(!click);
  const changeLanguage = () => props.setLanguage(!props.language);

  const changeLangAndCloseMenu = () => {
    changeLanguage();
    closeMobileMenu();
  };

  const closeMobileMenu = () => {
    setClick(false);
    window.scrollTo(0, 0);
  };

  if (click) {
    document.body.classList.add("body");
  } else {
    document.body.classList.remove("body");
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (
    window.location.pathname === "/en" ||
    window.location.pathname === "/en/about" ||
    window.location.pathname === "/en/projects" ||
    window.location.pathname === "/en/contact" ||
    props.language
  ) {
    return (
      <div>
        <nav className={navbar ? "sticky" : ""}>
          <NavLink to="/en" onClick={closeMobileMenu}>
            <img src="../images/logo.png" alt="logo" />
          </NavLink>
          <ul className={click ? "navbar active" : "navbar"}>
            <li className="nav">
              <NavLink
                exact
                to="/en"
                activeClassName="nav-active"
                onClick={closeMobileMenu}
              >
                <div className="nav-icons">
                  <FaHome />
                </div>
                Home
              </NavLink>
            </li>
            <li className="nav">
              <NavLink
                exact
                to="/en/about"
                activeClassName="nav-active"
                onClick={closeMobileMenu}
              >
                <div className="nav-icons">
                  <FaUser />
                </div>
                About
              </NavLink>
            </li>
            <li className="nav">
              <NavLink
                exact
                to="/en/projects"
                activeClassName="nav-active"
                onClick={closeMobileMenu}
              >
                <div className="nav-icons">
                  <FaFile />
                </div>
                Projects
              </NavLink>
            </li>
            <li className="nav">
              <NavLink
                exact
                to="/en/contact"
                activeClassName="nav-active"
                onClick={closeMobileMenu}
              >
                <div className="nav-icons">
                  <FaPhoneAlt />
                </div>
                Contact
              </NavLink>
            </li>
            <span className="language">
              <NavLink to="/" onClick={changeLangAndCloseMenu}>
                cz
              </NavLink>
            </span>
          </ul>
          <div
            onClick={handleClick}
            className={click ? "menu-btn open" : "menu-btn"}
          >
            <div className="menu-btn__burger"></div>
          </div>
          <div className="progress-container">
            <div
              className="progress-bar"
              id="myBar"
              style={{ width: `${scrollTop}%` }}
            ></div>
          </div>
        </nav>
      </div>
    );
  } else {
    return (
      <div>
        <nav className={navbar ? "sticky" : ""}>
          <NavLink to="/" onClick={closeMobileMenu}>
            <img src="./images/logo.png" alt="logo" />
          </NavLink>
          <ul className={click ? "navbar active" : "navbar"}>
            <li className="nav">
              <NavLink
                exact
                to="/"
                activeClassName="nav-active"
                onClick={closeMobileMenu}
              >
                <div className="nav-icons">
                  <FaHome />
                </div>
                Domů
              </NavLink>
            </li>
            <li className="nav">
              <NavLink
                exact
                to="/o_mne"
                activeClassName="nav-active"
                onClick={closeMobileMenu}
              >
                <div className="nav-icons">
                  <FaUser />
                </div>
                O mně
              </NavLink>
            </li>
            <li className="nav">
              <NavLink
                exact
                to="/projekty"
                activeClassName="nav-active"
                onClick={closeMobileMenu}
              >
                <div className="nav-icons">
                  <FaFile />
                </div>
                Projekty
              </NavLink>
            </li>
            <li className="nav">
              <NavLink
                exact
                to="/kontakt"
                activeClassName="nav-active"
                onClick={closeMobileMenu}
              >
                <div className="nav-icons">
                  <FaPhoneAlt />
                </div>
                Kontakt
              </NavLink>
            </li>
            <span className="language">
              <NavLink to="/en" onClick={changeLangAndCloseMenu}>
                en
              </NavLink>
            </span>
          </ul>
          <div
            onClick={handleClick}
            className={click ? "menu-btn open" : "menu-btn"}
          >
            <div className="menu-btn__burger"></div>
          </div>
          <div className="progress-container">
            <div
              className="progress-bar"
              id="myBar"
              style={{ width: `${scrollTop}%` }}
            ></div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
