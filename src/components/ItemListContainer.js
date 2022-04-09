import { useState, useEffect } from "react";
import ItemList from './ItemList';
import {getProductos,getProductosCategoria} from '../services/Productos';
import {useParams} from 'react-router-dom';


const ItemListContainer = ({saludo}) =>{
  const [productos,setProductos] = useState([]);
  const {categoria} = useParams();
  useEffect(()=>{
    if(categoria){
      getProductosCategoria(categoria).then((products)=>{
        setProductos(products) 
      });
    }else{
      
      getProductos().then((products)=>{
        console.log(products)
        setProductos(products)
      });
     
    }
  },[]);

  return (
    <div className="text-center">
        <h1>{saludo}</h1>
        <ItemList productos={productos}></ItemList>
    </div>
  );
}

export default ItemListContainer;