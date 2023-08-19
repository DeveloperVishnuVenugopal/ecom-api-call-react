import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {ShoppingBag } from 'react-feather'

function Header() {
  return (
    
    
 <>
    <Navbar className="bg-primary">
    <Container>
      <Navbar.Brand href="#" className="d-flex align-items-center">
        <ShoppingBag color='white' size={50} className="me-2" />
        <span className="text-light fw-bold" style={{ fontSize: '30px' }}>E-CART</span>
      </Navbar.Brand>
    </Container>
  </Navbar>
  
 </>


  )
}

export default Header