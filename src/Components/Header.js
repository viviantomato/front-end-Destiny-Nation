import React from "react";
import { Link } from "react-router-dom";
// import logo from "../img/maps.jpg";

import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <div>
          {/* <img className="brand-logo" src={logo} alt="maps" /> */}
          <a href="/">
            <p>Destiny-Nation</p>
          </a>
        </div>
        <div>
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
