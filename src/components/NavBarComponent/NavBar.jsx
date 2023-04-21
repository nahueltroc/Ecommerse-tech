/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Link className="navbar-brand" to={"/"}>
      <nav className="navbar-1 navbar-expand-lg bg-body-tertiary">
        <div>
        <img src="/logo192.png" alt="tecno" width={100} />
        <a className="navbar-brand" href="#">
            Tech Store
          </a>
         </div>
        <div className="container-fluid-op">
        
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
            <ul className="navbar-nav">
              <li className="nav-item">
        
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to={"/category/celulares"}
                  >
                    Celulares{" "}
                  </NavLink>
            
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to={"/category/perifericos"}
                  >
                    Perifericos
                  </NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to={"/category/notebooks"}
                  >
                    Notebooks
                  </NavLink>
                </a>
              </li>
              <li>
              <CartWidget />
              </li>
            </ul>
          </div >
        </div>
      </nav>
    </Link>
  );
}

export default NavBar;
