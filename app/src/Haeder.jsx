import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="desktopheader">
      <header className="custom-header">
        <div className="container-fluid header-top d-flex align-items-center">
          <h1 className="animated-title">Sai Krishna Cottage Industry</h1>

          {/* Single navbar for all screen sizes within the header */}
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link text-white fw-bold" to="/home">
                  Home
                </Link>
              </li>
              
             
            </ul>
          </nav>
        </div>
      </header>

      {/* Secondary navbar for links, fixed below the header */}
      <nav className="navbar">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link text-white fw-bold" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white fw-bold" to="/products">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white fw-bold" to="/about">
              About us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default React.memo(Header);
