import {Row,Col,Image} from "react-bootstrap";
import ItemCount from './ItemCount';
import { useState, useContext } from "react";
import { CartContext } from "../App";
import { Link } from "react-router-dom";
  
const ItemDetail = ({producto})=>{
  const {cart, setCart} = useContext(CartContext);

  console.log(cart);

  const [cantidad,setCantidad] = useState(0); 

  const onAdd = (knt)=>{
    setCantidad(knt);
    setCart([...cart,{...producto, 'seleccionado':knt}])
  }

   return (  
      <Row>
        <Col style={{ textAlign: "center" }} >
          <Row>
            <Col>
              <h2>{producto.nombre}</h2>
              <Image src={producto.img}></Image>
            </Col>
          </Row>
          <Row> 
              <Col >
                Categoría: {producto.categoria}
                <h1>Price: $ {producto.precio}</h1>
                {cantidad===0?<ItemCount inicial={1} stock={producto.stock} onAdd={onAdd}></ItemCount>:<Link className="btn btn-primary" to={'/cart'}>Terminar Compra</Link>}
              </Col>
          </Row>
        </Col>
        </Row>
      );
}

export default ItemDetail;