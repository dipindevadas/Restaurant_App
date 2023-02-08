import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function header() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="no logo"
              src="https://www.shutterstock.com/image-vector/restaurant-symbol-icon-600w-708584314.jpg"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            &nbsp;
            
            Find Me Restaurant
          </Navbar.Brand>
        </Container>
      </Navbar>
   
  )
}

export default header