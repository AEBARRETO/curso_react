import {Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({item}) =>{
    console.log(item);
    return(

        <Card  style={{textAlign:'center', width: '20rem' }}>
            <Card.Header>{item.categoria}</Card.Header>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                
                <Card.Text>$ {item.precio}</Card.Text>
                <Link className="btn btn-primary" to={'/productos/detalle/'+item.id}>Ver detalle de Producto</Link>
            </Card.Body>
            <Card.Footer>Stock Disponible {item.stock}</Card.Footer>
        </Card>

        
    );


}

export default Item;