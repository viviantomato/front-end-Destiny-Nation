import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";

import "./Header.css";
import { SearchBox } from "components/SearchBox";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div>
          <RouterLink className="nav-item" to="/">
            <Link component="span" variant="h4">
              Destiny-Nation
            </Link>
          </RouterLink>
        </div>
        <div className="right-container">
          {/* <RouterLink className="nav-item" to="/profile">
            <Link variant="h4">Profile</Link>
          </RouterLink> */}
          {/* <RouterLink className="nav-item" to="/destination">
            <Link variant="h4">Destination</Link>
          </RouterLink> */}
          <SearchBox className="nav-item" />
        </div>
      </div>
    </header>
  );
};
