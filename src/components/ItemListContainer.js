import { useState, useEffect } from "react";
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import {getProductos,getProductosCategoria} from '../services/Productos';
import {useParams} from 'react-router-dom';

const onAdd = (cantidad)=>{
  console.log('aqui');
}
const ItemListContainer = ({saludo}) =>{
  const [productos,setProductos] = useState([]);
  const {categoria} = useParams();
  useEffect(()=>{
    if(categoria){
      getProductosCategoria(categoria).then((products)=>{
        console.log("aaqui lalalal")
        console.log(products);
        setProductos(products)
        
      });
    }else{
      getProductos().then((products)=>{
        setProductos(products)
        console.log(products);
      });
    }
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