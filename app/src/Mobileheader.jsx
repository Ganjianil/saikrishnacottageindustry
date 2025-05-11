import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <div className="mobileheader">
      <header className="custom-header">
        <div className="container-fluid">
          {/* Company Name */}
          <h1 className="text-center animated-title">
            Sai Krishna Cottage Industry
          </h1>

          {/* Navbar */}
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link text-white fw-bold" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white fw-bold" href="#products">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white fw-bold" href="#contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white fw-bold" href="#about">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;