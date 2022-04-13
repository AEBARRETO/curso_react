import { useState, useEffect } from "react";
import {getProductosId} from '../services/Productos';
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ()=>{
    const [producto,setProducto] = useState({});

    const {id} = useParams();
    useEffect(()=>{
        getProductosId(id).then((producto)=>{
            setProducto(producto)
            console.log(producto);
      }).catch((e)=>{console.log(e);});
      return (()=>{setProducto({});})

    },[id]);

    if(!producto){
        return <>no hay productos</>;
    }

    return (
        <ItemDetail producto={producto}></ItemDetail>
    );
}

export default ItemDetailContainer;