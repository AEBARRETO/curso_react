import { useState } from "react";
import { Form,Modal, Button } from "react-bootstrap";

const contacto = ({cart, setMostrar}) =>{
  
    return (<>
            <Modal show={true} onHide={()=>setMostrar(false)}>
                <Modal.Header closeButton>
                <Modal.Title>Crear Orden de Compra</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control type="email" placeholder="name@ejemplo.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Apellido y Nombre</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={()=>setMostrar(false)}>
                    Cerrar
                </Button>
                <Button variant="primary" >
                    Guardar
                </Button>
                </Modal.Footer>
            </Modal>
            </>)
}

export default contacto;