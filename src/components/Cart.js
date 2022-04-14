import { useContext } from "react";
import CartContext from "../context/CartContext";
import CartItem from    './CartItem'
import { Container,Col, Row, Button} from "react-bootstrap";
import { BsCartX } from 'react-icons/bs'


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
            <Col><Button onClick={()=>limpiarCart()}><BsCartX fontSize="25px"/> Vaciar </Button></Col>
        </Row>
        <Row clasName="showGrid">
            <Col><b>Producto</b></Col>
            <Col><b>Categoría</b></Col>
            <Col><b>Cantidad</b></Col>
            <Col><b>Precio</b></Col>
            <Col><b>Total</b></Col>
            <Col><b>Eliminar</b></Col>
        </Row>
          
        {cart.map((e) => <CartItem eliminarItem={eliminarItem} key={e.id}  item={e}> </CartItem>)}
        </>: <div className="p-3 mb-2 bg-info text-center text-white"><h3>Sin Productos en el Carrito</h3></div>
        }

        </Container>
        
    );

}

export default Cart;