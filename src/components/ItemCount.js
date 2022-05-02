import { useState } from "react";
import { Button, Col,Row,} from 'react-bootstrap';

const ItemCount = ({stock,onAdd}) =>{
    const [count,setCount] = useState(0); 
    const increment = () =>{
        if(stock>count){
            setCount(count+1);
        } 
    }

    const decrement = () => {
        if(count>0){
            setCount(count-1);
        }
    }

    return (
        <>
            <Row>
                <Col className="justify-content-md-center d-flex">  
                    <Button mr-3 onClick={decrement}>-</Button>
                    <h4> {count} </h4>
                    <Button onClick={increment}>+</Button>
                </Col>
            </Row>
            
            {count>0&&<Button onClick={()=>onAdd(count)}>Agregar a Carrito</Button>}
        </>
    );
}

export default ItemCount;
