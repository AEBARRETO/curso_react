import { useState } from "react";
import { Button, Col,Row } from 'react-bootstrap';

const ItemCount = ({inicial=0,stock,onAdd}) =>{
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
            <Row  >
                <Col style={{textAlign:"center", width: '18rem'}} >
                    <Col><p>{count}</p></Col>
                    <Col  >  
                        <Button onClick={decrement}>-</Button>
                        <Button onClick={increment}>+</Button>
                    </Col>
                </Col>  
            </Row>
            <Button onClick={()=>onAdd(count)}>Agregar a Carrito</Button>
        </>
    );
}

export default ItemCount;
