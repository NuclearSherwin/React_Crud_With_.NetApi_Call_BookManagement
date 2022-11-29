import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Book Management</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={'/create'}>Add book</Link>
            {/* <Nav.Link href="#features">Edit book</Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  )
}

export default navbar