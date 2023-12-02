import React from "react";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-md bg-dark sticky-top border-bottom"
      data-bs-theme="dark"
    >
      <div className="container">
        <a className="navbar-brand d-md-none" href="#">
          <svg className="bi" width="24" height="24">
            <use xlinkHref="#aperture"></use>
          </svg>
          Aperture
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="#offcanvasLabel">
              Aperture
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav flex-grow-1 justify-content-between">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#aperture"></use>
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  How it Work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Enterprise
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Support
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#cart"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
