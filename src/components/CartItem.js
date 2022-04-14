import {Row,Col,Button} from "react-bootstrap";

const CartItem = ({item,eliminarItem}) =>{
    return (
        <Row>
            <Col>{item.nombre}</Col>
            <Col>{item.categoria}</Col>
            <Col>{item.seleccionado}</Col>
            <Col><Button onClick={()=>eliminarItem(item.id)}> Eliminar</Button></Col>
        </Row>
    )
}

export default CartItem;