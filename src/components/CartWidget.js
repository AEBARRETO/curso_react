import { FaShoppingCart  } from 'react-icons/fa'
import { useContext } from 'react';
import CartContext from "../context/CartContext";
import { NavLink } from 'react-router-dom';

const CartWidget = () =>{

  const {cart} = useContext(CartContext)

  return (
    <NavLink variant="light rounded-pill" to="/cart"  >
      <FaShoppingCart fontSize="25px" /> {cart.length}
    </NavLink>
  );
}

export default CartWidget;