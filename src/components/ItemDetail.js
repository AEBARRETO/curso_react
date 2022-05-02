import {Row,Col,Image} from "react-bootstrap";
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
        <Col style={{ textAlign: "center" }} >
          <Row>
            <Col>
              <h2>{producto.nombre}</h2>
              <Image thumbnail src={producto.img}></Image>
            </Col>
          </Row>
          <Row> 
              <Col >
                Categoría: {producto.categoria}
                <h1>Price: $ {producto.precio}</h1>
                {
                (cantidad===0&&!existeEnCarrito(producto.id))?
                  <ItemCount inicial={1} stock={producto.stock} onAdd={onAdd}></ItemCount>:
                  <Link className="btn btn-primary" to={'/cart'}>Ir al Carrito</Link>
                  }
              </Col>
          </Row>
        </Col>
        </Row>
      );
}

export default ItemDetail;