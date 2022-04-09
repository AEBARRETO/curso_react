import Item from "./Item";
import {Container, Row,Col } from "react-bootstrap";

const ItemList = ({productos=[]}) =>{
   return (
        <Container>
            <Row>  
                {productos.map((e) => <Item key={e.id}  item={e} />)}
            </Row>
        </Container>
    );   
}

export default ItemList;