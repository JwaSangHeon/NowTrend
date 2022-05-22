import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
          <p className="col-md-4 mb-0 text-muted">
            &copy; 2022 제주대 캡스톤, 5조
          </p>

          <a
            href="/"
            className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32"></svg>
          </a>

          <ul className="nav col-md-4 justify-content-end">
            {/* <li className="nav-item">
              <Link to="/intro" className="nav-link px-2 text-muted">
                Intro
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-muted">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/community" className="nav-link px-2 text-muted">
                Community
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/itnews" className="nav-link px-2 text-muted">
                IT News
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/report" className="nav-link px-2 text-muted">
                Report
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Footer;
