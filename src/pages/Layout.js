import React from 'react';
import './Layout.css';

import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-12 col-md-auto mb-2 justify-content-center mb-md-0"></div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" className="text-warning">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/TwoDigits" className="text-primary">
              LAST 2
            </Link>
          </li>
          <li>
            <Link to="/ThreeDigits" className="text-danger">
              SWERTRES
            </Link>
          </li>
          <li>
            <Link to="/FourDigits" className="text-success">
              4 DIGITS
            </Link>
          </li>
          <li>
            <Link to="/SixDigits" className="text-info">
              6 DIGITS
            </Link>
          </li>
          <li>
            <Link to="/SixFourtyTwo" className="text-warning">
              LOTTO 6/42
            </Link>
          </li>
          <li>
            <Link to="/SixFourtyFive" className="text-primary">
              MEGALOTTO 6/45
            </Link>
          </li>
          <li>
            <Link to="/SixFourtyNine" className="text-danger">
              SUPERLOTTO 6/49
            </Link>
          </li>
          <li>
            <Link to="/SixFiftyFive" className="text-success">
              GRANDLOTTO 6/55
            </Link>
          </li>
          <li>
            <Link to="/SixFiftyEight" className="text-info">
              ULTRALOTTO 6/58
            </Link>
          </li>
        </ul>

        <div className="col-12 col-md-auto mb-2 justify-content-center mb-md-0"></div>
      </header>

      <Outlet />
    </>
  );
};

export default Layout;
