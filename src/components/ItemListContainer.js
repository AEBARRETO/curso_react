import { useState, useEffect } from "react";
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import {getProductos} from '../services/Productos';

const onAdd = (cantidad)=>{
  console.log('aqui');
}
const ItemListContainer = ({saludo}) =>{
  const [productos,setProductos] = useState([]);

useEffect(()=>{
  getProductos().then((products)=>{
    setProductos(products)
    console.log(products);
  });


},[]);

  return (
    <div className="text-center">
        <h1>{saludo}</h1>
        <ItemCount inicial={1} stock={5} onAdd={onAdd}></ItemCount>
        <ItemList productos={productos}></ItemList>
    </div>
  );
}

export default ItemListContainer;