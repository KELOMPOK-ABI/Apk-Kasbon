import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="app-navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              className="img-fluid me-2"
              src="https://statik.dpr.go.id/plugin-jdih/images/logo-setjen.png"
            />
            Administrasi Keuangan
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {/* <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/"><i class="fa-solid fa-house me-2"></i>Home</Link>
      </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i class="fa-solid fa-house me-2"></i>Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/kasbons/addkasbon">
                  <i class="fa-solid fa-box me-2"></i>Add Kasbon
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  <i class="fa-solid fa-right-to-bracket me-2"></i>Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
