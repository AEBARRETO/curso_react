
import CartContext from "../context/CartContext";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Form,Modal, Button, Alert } from "react-bootstrap";


const Contacto = ({ setMostrar}) =>{
    const  {cart,nuevaOrden} = useContext(CartContext)
    const [showAlerta,setShowAlerta] = useState(false);

    const { register, handleSubmit } = useForm();
    const onSubmit = (comprador) => {
       
       const id =  nuevaOrden({cart,comprador}) 
       console.log(id)
       setShowAlerta(true) 

    };
    return (<>
           
            <Modal show={true} onHide={()=>setMostrar(false)} >
                <Modal.Header closeButton>
                <Modal.Title>Crear Orden de Compra</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Alert  variant="success">
                         Orden de Compra realizada.
                    </Alert>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control type="email" placeholder="name@ejemplo.com" {...register("email")} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Apellido y Nombre</Form.Label>
                            <Form.Control type="text" {...register("nombre")}/>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control type="phone" placeholder="3816299773" {...register("telefono")}/>
                        </Form.Group>
                        <Form.Group className="mb-3"  >
                            <Button variant="secondary" onClick={()=>setMostrar(false)}>Cerrar
                            </Button>
                            <Button variant="primary" type="submit"> Guardar </Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
              
                </Modal.Footer>
            </Modal>
            </>)
}

export default Contacto;