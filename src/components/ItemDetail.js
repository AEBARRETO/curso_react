import {Row,Col,Image, Button } from "react-bootstrap";
//const Item = ({item}) =>{
const ItemDetail = ({producto})=>{
    console.log(producto)
return (  
    <Row  className="item">
      <Col sm={3}>
        <Image src={producto.img}></Image>
      </Col>
      <Col >
        <h2>{producto.categoria}</h2>
        <p>{producto.nombre}</p>
        <Row className="buttonRow">
           <Col style={{ textAlign: "right" }}>
            <p>Price: {producto.precio}</p>
            
            <Button id="buy" variant="primary">
                Comprar
            </Button>
            
          </Col>
        </Row>
      </Col>
    </Row>
    );
}

export default ItemDetail;