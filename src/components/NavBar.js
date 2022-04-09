
import {Navbar,Container,Nav,Image} from 'react-bootstrap'
import CartWidget from './CartWidget';


const NavBar = () =>{
    return (
      <Navbar bg="dark" variant='dark' expand="lg">
        <Container>
          <Image src={'../logo.jpg'}></Image>
          <Navbar.Brand href="/">Barreto´s Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav  className="mr-auto">
              <Nav.Link href="/" className={isActive =>"nav-link" + (!isActive ? " unselected" : "")} >Inicio</Nav.Link>
              <Nav.Link href="/categoria/Notebook">Notebook</Nav.Link>
              <Nav.Link href="/categoria/Celular">Celulares</Nav.Link>
              <Nav.Link href="/categoria/Tablet">Tablets</Nav.Link>
            </Nav>
            <CartWidget/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );

}

export default NavBar;