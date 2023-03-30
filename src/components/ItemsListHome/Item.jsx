import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ item }) => {
  return (
    <Link to={"/item/" + item.id} className="text-decoration-none">
      <div className="containerere">
        <img src={item.imagen} className="homeimagen" alt={item.nombre} />
        <p className="card-nombre ">{item.nombre} </p>
        <p className="card-description">{item.descripcion} </p>
        <p className="card-precio">${item.precio} </p>
      </div>
    </Link>
  );
};

export default Item;
