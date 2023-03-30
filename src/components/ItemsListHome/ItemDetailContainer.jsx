import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import productos from "../json/productos.json";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getItem = async () => {
      try {
        const data = await productos.find((item) => item.id === parseInt(id));
        setItem(data);
      } catch (error) {
        console.log(error);
      }
    };

    getItem();
  }, [id]);

  return (
    <div className="container">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
