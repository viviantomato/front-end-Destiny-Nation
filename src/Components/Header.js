import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Searchbox from "./Searchbox";

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
      <Searchbox></Searchbox>
    </>
  );
};

export default Header;
