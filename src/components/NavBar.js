
import {Navbar,Container,Nav,Image} from 'react-bootstrap'
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
import {getCategorias} from '../services/Categorias';
import { useState, useEffect} from "react";


const NavBar = () =>{
    const [categorias, setCategorias] = useState([])
    
    useEffect(()=>{
      getCategorias().then((cates)=>{
        setCategorias(cates)
      })
    },[])


    return (
      <Navbar bg="dark" variant='dark' expand="lg">
        <Container>
          <NavLink to="/" className={'navbar-brand'}><Image src={'../logo.jpg'}/>Barreto´s Store</NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav  className="mr-auto">
              <NavLink to="/"className="nav-link">Inicio</NavLink>
              {categorias&& categorias.map((item) =><NavLink key={item.id} to={"/categoria/"+item.nombre} className="nav-link">{item.nombre}</NavLink> )}

            </Nav>
            <CartWidget/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );

}

export default NavBar;