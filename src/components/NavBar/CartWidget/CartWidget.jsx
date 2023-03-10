import React from "react";
import "./CartWidget.css";

function CartWidget() {
  return (
    <div className="cart">
      <i className="bi bi-cart3"></i>
      <sup>5</sup>
    </div>
  );
}

export default CartWidget;
