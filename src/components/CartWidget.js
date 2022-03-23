import Image from 'react-bootstrap/Image'


const CartWidget = () =>{
  return (
    <div>
        <Image src="../carrito.png"/>
        <small className="text-muted"> 0</small> 
    </div>
  );
}

export default CartWidget;