import { useState } from "react";
import { Button } from 'react-bootstrap';

const ItemCount = ({inicial=0,stock,onAdd}) =>{
    const [count,setCount] = useState(inicial); 
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
    <div>
        <Button onClick={decrement}>-</Button>
        <p>{count}</p>
        <Button onClick={increment}>+</Button>
        <Button onClick={()=>onAdd(count)}>Add</Button>
    </div>);
}

export default ItemCount;