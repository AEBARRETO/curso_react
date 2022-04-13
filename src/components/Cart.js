import { useContext } from "react";
import CartContext from "../context/CartContext";
import CartItem from    './CartItem'
import { Container, Row } from "react-bootstrap";



const Cart =()=>{

    const  {cart} = useContext(CartContext)
    console.log(cart)

    return (
        <Container>
        <Row><h2>CARRITO</h2></Row>
        <Row>  
            {cart.map((e) => <CartItem key={e.id}  item={e}> </CartItem>)}
        </Row>
        </Container>
        
    );

}

export default Cart;