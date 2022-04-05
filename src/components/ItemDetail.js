import {Row,Col,Image, Button } from "react-bootstrap";
import ItemCount from './ItemCount';

    
const onAdd = (cantidad)=>{
  console.log('aqui');
}
const ItemDetail = ({producto})=>{
    console.log(producto)
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
              <ItemCount inicial={1} stock={producto.stock} onAdd={onAdd}></ItemCount>
            </Col>
        </Row>
      </Col>
      </Row>
    );
}

export default ItemDetail;