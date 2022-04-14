
import {Navbar,Container,Nav,Image} from 'react-bootstrap'
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';


const NavBar = () =>{
    return (
      <Navbar bg="dark" variant='dark' expand="lg">
        <Container>
        <NavLink to="/"><Image src={'../logo.jpg'}></Image></NavLink>
          <NavLink to="/" className={'navbar-brand'}>Barreto´s Store</NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav  className="mr-auto">
              <NavLink to="/"                    className="nav-link">Inicio</NavLink>
              <NavLink to="/categoria/Notebook"  className="nav-link">Notebook</NavLink>
              <NavLink to="/categoria/Celular"   className="nav-link">Celulares</NavLink>
              <NavLink to="/categoria/Tablet"    className="nav-link">Tablets</NavLink>
            </Nav>
            <CartWidget/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );

}

export default NavBar;