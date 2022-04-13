import { useContext } from "react";
import CartContext from "../context/CartContext";
import CartItem from    './CartItem'
import { Container,Col, Row, Button } from "react-bootstrap";


const Cart =()=>{

    const  {cart,eliminarItem,limpiarCart} = useContext(CartContext)
    return (
        <Container>
        <Row>
            <Col><h2>CARRITO</h2></Col>
            <Col></Col>
            <Col></Col>
            <Col><Button onClick={()=>limpiarCart()}> Limpiar Carrito</Button></Col>
        </Row>
          
        {cart.map((e) => <CartItem eliminarItem={eliminarItem} key={e.id}  item={e}> </CartItem>)}
    
        </Container>
        
    );

}

export default Cart;