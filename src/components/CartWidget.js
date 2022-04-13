import {Button } from 'react-bootstrap'
import { FaShoppingCart  } from 'react-icons/fa'
import { useContext } from 'react';
import { CartContext } from '../App';


const CartWidget = () =>{

  const {cart} = useContext(CartContext)

  return (
    <Button variant="light rounded-pill">
      <FaShoppingCart fontSize="25px" /> {cart.length}
    </Button>
  );
}

export default CartWidget;