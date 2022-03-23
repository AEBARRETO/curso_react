import { Row,Col } from "react-bootstrap";

const ItemList = ({productos=[]}) =>{
    console.log(productos);
   


    return (
    
    <>
        {productos.map((e,i) => 
            <Row>
                <Col>{e.nombre}</Col>
                <Col>{e.precio}</Col>
                <Col>{e.stock}</Col>
                <img src={e.img} style={{ width: 200, height: 100}}></img>
            </Row> 
        
        )}
    </>
    
    
    );
    
}

export default ItemList;