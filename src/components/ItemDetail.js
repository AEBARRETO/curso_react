import {Row,Col,Card} from "react-bootstrap";
import ItemCount from './ItemCount';
import { useState, useContext } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";
  
const ItemDetail = ({producto})=>{
  
  const {agregarItem,existeEnCarrito} = useContext(CartContext)
  const [cantidad,setCantidad] = useState(0)

  const onAdd = (knt)=>{
    if(knt>0){
      setCantidad(knt)
      agregarItem({...producto, 'seleccionado':knt})
    }else{
      console.log('cantidad igual a cero')
    }
    
  }

   return (  
      <Row>
         <Col style={{ textAlign: "center" }} className="justify-content-md-center d-flex">  
            <Card  style={{ width: '30rem'}}>
                <Card.Header> <h3>{producto.nombre} </h3></Card.Header>
                <Card.Img variant="top" src={producto.img} />
                <Card.Body>
                    <Card.Title>{producto.categoria}</Card.Title>      
                    <Card.Text>Precio: $ {producto.precio}</Card.Text>
                    {
                    (cantidad===0&&!existeEnCarrito(producto.id))?
                    <ItemCount inicial={1} stock={producto.stock} onAdd={onAdd}></ItemCount>:
                    <Link className="btn btn-primary" to={'/cart'}>Ir al Carrito</Link> 
                    }
                    
                </Card.Body>
                <Card.Footer><Link className="btn btn-success" to={'/'}>Volver a Lista de Productos</Link> </Card.Footer>
            </Card>  

          </Col>
        </Row>
      );
}

export default ItemDetail;