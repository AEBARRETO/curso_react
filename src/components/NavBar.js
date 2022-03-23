
import {Navbar,Container,Nav,Image} from 'react-bootstrap'
import CartWidget from './CartWidget';

const NavBar = () =>{
    return (
    <>
   <Navbar bg="dark" variant='dark' expand="lg">
  <Container>
    <Image src={'../logo.jpg'}></Image>
    <Navbar.Brand href="#home">Barreto´s Store</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav.Link href="#home">Inicio</Nav.Link>
      <Nav className="me-auto">
        <Nav.Link href="#tv">TV,Aduio yVideo</Nav.Link>
        <Nav.Link href="#celulares">Celulares</Nav.Link>
        <Nav.Link href="#computadoras">Computadoras y Notebook</Nav.Link>
        <Nav.Link href="#hogar">Hogar</Nav.Link>
      </Nav>
      <Nav.Link href="#Login">Login</Nav.Link>
      <CartWidget/>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
    );

}

export default NavBar;