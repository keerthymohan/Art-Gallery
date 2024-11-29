import React from 'react'
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      

    <div className=' p-4 d-md-flex mt-4'>
        <h1>ART GALLERY</h1>
        <div className='ms-auto'>
          <h5 className='mt-md-0 mt-4'>Email: art.gallery@gmail.com</h5>
          <div className="d-flex ">
          <FontAwesomeIcon icon={faFacebook} className='fa-2x' />
                <FontAwesomeIcon icon={faInstagram} className='fa-2x ms-4'  />
                <FontAwesomeIcon icon={faTwitter} className='fa-2x ms-4' />
                <FontAwesomeIcon icon={faWhatsapp} className='fa-2x ms-4' />
          </div>
        </div>
    </div>

    <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" fs-3 ms-md-5" >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/paintings" className='ms-md-5 '>Paintings</Nav.Link>
            <Nav.Link href="/sculptures" className='ms-md-5'>Sculptures</Nav.Link>
            <Nav.Link href="/artist" className='ms-md-5'>Artist</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <hr />

    </>
  )
}

export default Header