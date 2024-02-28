


import { useState } from 'react';
import '../../index.css'
import { NavLink } from 'react-router-dom';
const Nav = () => {
    const [valor, setValor] = useState(true)
    console.log(valor);
 
    return(
        <nav onClick={()=> setValor(!valor) } className={`${!valor ? 'menu is-active' : 'menu'}`}>
          <NavLink to="inicio" onClick={()=> setValor(!valor) }>Inicio</NavLink>
          <NavLink to="acerca" onClick={()=> setValor(!valor) }>Acerca</NavLink>
          <NavLink to="servicios" onClick={()=> setValor(!valor) }>Servicios</NavLink>
          <NavLink to="portafolio" onClick={()=> setValor(!valor) }>Portafolio</NavLink>
          <NavLink to="testimonios" onClick={()=> setValor(!valor) }>Testimonios</NavLink>
          <NavLink to="contacto" onClick={()=> setValor(!valor) }>Contacto</NavLink>
        </nav>
    )
}

export default Nav;