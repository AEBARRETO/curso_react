import { useContext } from "react";
import CartContext from "../context/CartContext";
import CartItem from    './CartItem'
import { Container,Col, Row, Button,thead} from "react-bootstrap";


const Cart =()=>{

    const  {cart,eliminarItem,limpiarCart} = useContext(CartContext)
    return (
        <Container>
       
        {cart.length>0?
        <>
        <Row>
            <Col><h2>CARRITO</h2></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col><Button onClick={()=>limpiarCart()}> Limpiar Carrito</Button></Col>
        </Row>
        <Row clasName="showGrid">
            <Col>Producto</Col>
            <Col>Categoría</Col>
            <Col>Cantidad</Col>
            <Col>Precio</Col>
            <Col>Total</Col>
            <Col>Eliminar</Col>
        </Row>
          
        {cart.map((e) => <CartItem eliminarItem={eliminarItem} key={e.id}  item={e}> </CartItem>)}
        </>: <div className="p-3 mb-2 bg-info text-center text-white"><h3>Sin Productos en el Carrito</h3></div>
        }

        </Container>
        
    );

}

export default Cart;