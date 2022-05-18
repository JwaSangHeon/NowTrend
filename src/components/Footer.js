import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="container" style={{ width: "85%" }}>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
          <p className="col-md-4 mb-0 text-muted">&copy; 2022 Company, Inc</p>

          <a
            href="/"
            className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32"></svg>
          </a>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-muted">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tech" className="nav-link px-2 text-muted">
                Tech
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/velog" className="nav-link px-2 text-muted">
                Velog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/itnews" className="nav-link px-2 text-muted">
                IT News
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/jobsite" className="nav-link px-2 text-muted">
                Jobsite
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Footer;
