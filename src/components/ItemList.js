import Item from "./Item";
import {Container, Row,Col } from "react-bootstrap";

const ItemList = ({productos=[]}) =>{
    console.log(productos);


    return (
    <Container>
        <Row>
             <Col/>
            <Col>
            {productos.map((e) => 
            <Item key={e.id}  item={e} />
            )}
            </Col>
            <Col/>
        </Row>
    </Container>
    );   
}

export default ItemList;