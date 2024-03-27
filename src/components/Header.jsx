import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
       <Navbar expand="lg" className="bg-light w-100 position-fixed py-4" style={{zIndex:1}}>
        <Container>
          <Navbar.Brand className='text-black fw-bolder'>
            <Link className='text-decoration-none fw-bolder fs-2 text-black' to={'/'}>Ecommerce</Link>    
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto  align-items-center">
            <Nav.Link><Link className='fw-medium text-black text-decoration-none' to={'/allproducts'}>Home</Link></Nav.Link>
            <Nav.Link><Link className='fw-medium text-black text-decoration-none' to={'/allproducts'}>Products</Link></Nav.Link>
            <Nav.Link><Link className='fw-medium text-black text-decoration-none' to={'/users'}>Users</Link></Nav.Link>

              <Nav.Link className='fs-6 mx-2'><Link className='btn btn-outline-dark' to={'/cart'} style={{ textDecoration: 'none', color: 'black' }}><i className="fa-solid fa-cart-plus text-success fs-5"></i> Cart<Badge className='bg-danger text-white ms-2'>50</Badge></Link></Nav.Link>
              <Nav.Link>
                <Link to={'/categories'} className='btn  text-white fw-medium' style={{textDecoration:'none',backgroundColor:'black'}}>Categories</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header