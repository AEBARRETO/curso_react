import {Row,Col,Image, Button } from "react-bootstrap";
import ItemCount from './ItemCount';
import { useState } from "react";

  
const ItemDetail = ({producto})=>{
  const [cantidad,setCantidad] = useState(0); 

  const onAdd = (knt)=>{
    console.log('aqui: '+knt);
    setCantidad(knt);
  }

   return (  
      <Row>
        <Col style={{ textAlign: "center" }} >
          <Row>
            <Col><h2>{producto.nombre}</h2></Col>
          </Row>
          <Row >
            <Col>
              <Image src={producto.img}></Image>
            </Col>
          </Row>
          <Row>
            <Col>Categoría: {producto.categoria}</Col>
          </Row>
          <Row> 
              <Col >
              <h1>Price: $ {producto.precio}</h1>
              {console.log('cantidad=>'+cantidad)}
                {cantidad===0?<ItemCount inicial={1} stock={producto.stock} onAdd={onAdd}></ItemCount>:<Button>Ir al Carrito</Button>}
              </Col>
          </Row>
        </Col>
        </Row>
      );
}

export default ItemDetail;