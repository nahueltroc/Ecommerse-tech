import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import productos from "./productos/productos.json";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const foundItem = productos.find(product => product.id === parseInt(id));
        setItem(foundItem);
    }, [id])

    return(
        <div className="container">
            <ItemDetail item={item} />
        </div>
    )
}


export default ItemDetailContainer;