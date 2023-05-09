import React from "react";
import "./Layout.css";

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div class="col-md-3 mb-2 mb-md-0"></div>

        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" className="text-warning">
              Home
            </Link>
          </li>
          <li>
            <Link to="/TwoDigits" className="text-primary">
              2 Digits
            </Link>
          </li>
          <li>
            <Link to="/ThreeDigits" className="text-danger">
              3 Digits
            </Link>
          </li>
          <li>
            <Link to="/FourDigits" className="text-success">
              4 Digits
            </Link>
          </li>
          <li>
            <Link to="/SixDigits" className="text-info">
              6 Digits
            </Link>
          </li>
        </ul>

        <div class="col-md-3 text-end"></div>
      </header>

      <Outlet />
    </>
  );
};

export default Layout;
