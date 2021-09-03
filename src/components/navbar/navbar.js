import React, { useRef } from "react";
import "./navbar.css";
import useDetectOutsideClick from "./useDetectOutsideClick";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.user.value);
  const helloMsg = user ? "Hi " + user : "Join Us";
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="header header-fixed">
      <header className="header__collection">
        <div className="header-part main-section">
          <nav>
            <a href="/">
              <img
                src="https://img.icons8.com/material-outlined/48/000000/menu--v1.png"
                alt="menu"
              />
            </a>
          </nav>
          <div className="header-title">
            <div>
              <a href="/">Shopperbird</a>
            </div>
          </div>
          <div className="header__navbartext">{helloMsg}</div>
          <div>
            <a onClick={onClick} className="menu-trigger">
              <img
                src="https://img.icons8.com/material-sharp/48/000000/user.png"
                alt="user"
              />
            </a>
            <nav
              ref={dropdownRef}
              className={`menu ${isActive ? "active" : "inactive"}`}
            >
              <div className="dropdown">
                <ul>
                  <li>
                    <a href="/account">Account</a>
                  </li>
                  <li>
                    <a href="/designer">Design</a>
                  </li>
                  <li>
                    <a href="/">Join us</a>
                  </li>
                  <li>
                    <a href="/">Logout</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Navbar;
