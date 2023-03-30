import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import productos from "../json/productos.json";

const ItemListContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getItems = async () => {
      try {
        const data = await productos.filter((item) =>
          id ? item.categoria === id : true
        );
        setItem(data);
      } catch (error) {
        console.log(error);
      }
    };
    getItems();
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <ItemList item={item} />
      </div>
    </div>
  );
};

export default ItemListContainer;
