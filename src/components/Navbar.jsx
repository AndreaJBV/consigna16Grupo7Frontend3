import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        {/* Aqui deberan agregar los Links */}
        <Link to='/'><h3>Inicio</h3></Link>
        <Link to='/beer'><h3>Beer</h3></Link>
        <Link to='/contacto'><h3>Contacto</h3></Link>
    </nav>
  )
}

export default Navbar