import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { 
  Container,
  Image,
  Row,
  Col,
  Jumbotron,
  Nav,
  Button,
  Navbar,
  Card,
  CardColumns,
  ButtonToolbar,
  ButtonGroup
} from "react-bootstrap";

function App() {
  return (
    <Router>
      <Container className="p-2">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/">Dylan Dunn</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/blog">Blog</Nav.Link>
            </Nav>
            <Button variant="outline-secondary text-white">Login</Button>
          </Navbar.Collapse>
        </Navbar>
      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>
        <Route exact path="/blog">
          <BlogView />
        </Route>
      </Switch>
      </Container>
    </Router>
  );
}

class BlogView extends React.Component {
  render() {
    return (
      <>
        <Jumbotron className="text-white mt-4 p-0 dark-color mb-0">
          <Row className="m-0 p-0">
            <Col xs={12} md={6} className="m-0 p-0">
              <Image src={require('./img/paella.jpg')} fluid/>
            </Col>
            <Col className="col-md-6 col-xs-12 light-color text-dark">
                <h1 className="display-4"> Blog </h1>
                <p className="lead">Lorem Ipsum.</p>
                <p>Lorem Ipsum</p>
            </Col>
          </Row>
        </Jumbotron>
        <Row className="no-gutters pt-4">
        <CardColumns>
            <Card>
                <Card.Img variant="top" src={require('./img/bak.jpg')}/>
                <Card.Body>
                  <Card.Title className="text-dark"> Example Picture </Card.Title>
                  <Card.Text className="text-dark"> Lorem Ipsum </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                  <Card.Title className="text-dark"> Example Article </Card.Title>
                  <Card.Text className="text-dark"> Lorem Ipsum </Card.Text>
                  <Button variant="primary">Read</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={require('./img/test.jpg')}/>
                <Card.Body>
                  <Card.Title className="text-dark"> Example Video </Card.Title>
                  <Card.Text className="text-dark"> Lorem Ipsum </Card.Text>
                  <Button variant="primary">Watch</Button>
                </Card.Body>
            </Card>
        </CardColumns>
      </Row>
    </>
    )
  }
}

class HomeView extends React.Component {
  render() {
    return (
      <>
        <ProfileView/>
        <Col className="col-12 text-center mt-4">
          <small className="col-12"> Copyright &copy; 2019 Dylan Dunn. All Rights Reserved</small>
        </Col>
      </>
    )
  }
}

class ProfileView extends React.Component {
  render() {
    return (
      <Jumbotron className="text-white mt-4 p-0 dark-color mb-0">
        <Row className="m-0 p-0">
          <Col xs={12} md={6} className="m-0 p-0">
            <Image src={require('./img/Head.png')} fluid/>
          </Col>
          <Col className="col-md-6 col-xs-12 light-color text-dark">
              <h1 className="display-4"> Dylan Dunn </h1>
              <p className="lead">Jack Of All Trades. Master Of None.</p>
              <ButtonToolbar className="mb-4">
                <ButtonGroup className="mr-2" aria-label="First group">
                  <Button href="https://github.com/dhd5076" variant="dark">
                    <i className="fa fa-github"/>
                  </Button>
                  <Button href="https://instagram.com/dhd5076" variant="dark">
                    <i className="fa fa-instagram"/>
                  </Button>
                  <Button href="mailto:ddunn17@student.monroecc.edu" variant="dark">
                    <i className="fa fa-envelope"/>
                  </Button>
                  <Button href="https://www.linkedin.com/in/dylan-dunn-73558614a/"  variant="dark">
                    <i className="fa fa-linkedin"/>
                  </Button>
                </ButtonGroup>
              </ButtonToolbar>
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
