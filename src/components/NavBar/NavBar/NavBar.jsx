/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
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
              <a class="nav-link active" aria-current="page">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Celulares
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Perifericos
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ">Notebooks</a>
            </li>
          </ul>
        </div>
        {<CartWidget />}
      </div>
    </nav>
  );
}

export default NavBar;
