import React from "react";
import { Link } from "react-router-dom";
// import logo from "../img/maps.jpg";

import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="navLeft">
          {/* <img className="brand-logo" src={logo} alt="maps" /> */}
          <a href="/">
            <h3>🏞️ Destiny-Nation</h3>
          </a>
        </div>
        <div className="navRight">
          <Link className="btn" to="/">
            Home
          </Link>
          <Link className="btn" to="/profile">
            Profile
          </Link>
          <Link className="btn" to="/destination">
            Destination
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
