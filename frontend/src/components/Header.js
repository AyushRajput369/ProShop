import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router';

const Header = () => {
  let navigate = useNavigate();
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand onClick={()=> navigate('/')} style={{cursor:'pointer'}}>ProShop</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link onClick={()=> navigate('/cart')}>
                <i className='fas fa-shopping-cart'></i> Cart
              </Nav.Link>
              <Nav.Link onClick={()=> navigate('/login')}>
                <i className='fas fa-user'></i> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header