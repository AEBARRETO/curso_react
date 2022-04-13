

import {  Col } from "react-bootstrap";
const CartItem = ({item}) =>{

    return (
        <>
            <Col>{item.nombre}</Col>
            <Col>{item.categoria}</Col>
            <Col>{item.seleccionado}</Col>
        </>
    )

}

export default CartItem;