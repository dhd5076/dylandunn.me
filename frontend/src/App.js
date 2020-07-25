import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import { 
  Container,
  Image,
  Row,
  Col,
  Jumbotron,
  NavDropdown,
  Nav,
  Button,
  Navbar,
} from "react-bootstrap"

function App() {
  return (
    <Router>
      <Container className="p-0">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">Dylan Dunn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant="outline-secondary text-white">Login</Button>
        </Navbar.Collapse>
      </Navbar>
      <ProfileView/>
      <Col className="col-12 text-center">
        <small className="col-12"> Copyright &copy; 2019 Dylan Dunn. All Rights Reserved</small>
      </Col>
      </Container>
    </Router>
  );
}

class ProfileView extends React.Component {
  render() {
    return (
      <Jumbotron className="text-white p-0 dark-color mb-0">
        <Row className="m-0 p-0">
          <Col className="m-0 p-0">
            <Image src={require('./img/Head.png')} fluid/>
          </Col>
          <Col className="light-color text-dark">
              <h1 className="display-4"> Dylan Dunn </h1>
              <p className="lead">Jack Of All Trades. Master Of None.</p>
              <p>Culinary Arts</p>
              <p>Hospitality and Management</p>
              <p>Web Design</p>
              <p>Software Development</p>
              <p>Photography</p>
              <p>Video Editing</p>
          </Col>
        </Row>
      </Jumbotron>
    )
  }
}

export default App;
