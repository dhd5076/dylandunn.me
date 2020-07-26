import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
  ButtonGroup,
  Form
} from "react-bootstrap";

function App() {
  return (
    <Router>
      <Container className="p-2">
        <NavbarView loggedIn={false} />
      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>
        <Route exact path="/blog">
          <BlogView />
        </Route>
        <Route exact path="/login">
          <LoginView />
        </Route>
      </Switch>
      <Col className="col-12 text-center mt-4">
          <small className="col-12"> Copyright &copy; 2019 Dylan Dunn. All Rights Reserved</small>
      </Col>
      </Container>
    </Router>
  );
}

class NavbarView extends React.Component {
  constructor(props) {
    super(props);
    this.isLoggedIn = props.isLoggedIn;
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">Dylan Dunn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/blog">Blog</Nav.Link>
          </Nav>
          <Button href="/login" variant="outline-secondary text-white">Login</Button>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

class LoginView extends React.Component {
  render() {
    return (
      <>
        <Jumbotron className="text-white mt-4 p-0 dark-color mb-0">
          <Row className="m-0 p-0">
            <Col xs={12} md={6} className="col-md-6 col-xs-12 dark-color text-light">
              <h1 className="display-4"> Create Account </h1>
              <Form className="mb-4">
                <Row className="mt-4">
                  <Col>
                    <Form.Control name="first-name" type="text" placeholder="First Name"/>
                  </Col>
                  <Col>
                    <Form.Control name="last-name" type="text" placeholder="Last Name"/>
                  </Col>
                </Row>
                <Row className="mt-4 pl-3 col-4">
                  <select name="gender" className="form-control">
                    <option selected>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </Row>
                <Row className="mt-4">
                  <Col>
                    <Form.Control type="email " placeholder="Email Address"/>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col>
                    <Form.Control name="password" type="password" placeholder="Password"/>
                  </Col>
                </Row>
                <Row className="mt-4 mr-0 pull-right mb-3">
                  <Button variant="dark" size="lg"> Create Account </Button>
                </Row>
              </Form>
            </Col>
            <Col xs={12} md={6} className="col-md-6 col-xs-12 light-color text-dark">
                <h1 className="display-4"> Login </h1>
                <Form className="mb-4">
                <Row className="mt-4">
                  <Col>
                    <Form.Control type="email " placeholder="Email Address"/>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col>
                    <Form.Control name="password" type="password" placeholder="Password"/>
                  </Col>
                </Row>
                <Row className="ml-0 mt-4">
                  <Link>Forgot Password?</Link>
                </Row>
                <Row className="mt-4 mr-0 pull-right mb-3">
                  <Button variant="dark" size="lg"> Login </Button>
                </Row>
              </Form>
            </Col>
          </Row>
        </Jumbotron>
        <Row className="no-gutters pt-4">
      </Row>
    </>
    )
  }
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
                  <Card.Text className="text-dark"> Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                  <Card.Title className="text-dark"> Example Article </Card.Title>
                  <Card.Text className="text-dark"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Card.Text>
                  <Button variant="primary">Read</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={require('./img/test.jpg')}/>
                <Card.Body>
                  <Card.Title className="text-dark"> Example Video </Card.Title>
                  <Card.Text className="text-dark"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </Card.Text>
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
