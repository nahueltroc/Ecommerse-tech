import React from "react";

const ItemDetail = ({ item }) => {
  return (
    <div className="row" id="itemdetail">
      <div className="col-md-4 offset-md-4">
        <img src={item.imagen} className="img-fluid" alt={item.nombre} />
        <h1>{item.nombre}</h1>
        <p>{item.descripcion}</p>
        <p>${item.precio} </p>
      </div>
      <div></div>
    </div>
  );
};

export default ItemDetail;
