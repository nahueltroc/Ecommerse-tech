/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Link className="navbar-brand" to={"/"}>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <img src="/logo192.png" alt="tecno" width={100} />

        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Tech Store
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div ClassName="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to={"/category/celulares"}
                  >
                    Celulares{" "}
                  </NavLink>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to={"/category/perifericos"}
                  >
                    Perifericos
                  </NavLink>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to={"/category/notebooks"}
                  >
                    Notebooks
                  </NavLink>
                </a>
              </li>
            </ul>
          </div>
          <CartWidget />
        </div>
      </nav>
    </Link>
  );
}

export default NavBar;
