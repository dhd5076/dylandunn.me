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
  NavDropdown
} from "react-bootstrap";

import BlogView from "./BlogView";
import WingStatView from "./WingStatView";
import LoginView from "./LoginView";
import VideoView from "./VideoView";
import PhotoView from "./PhotoView";
import ProfileView from "./ProfileView";

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
        <Route exact path="/wingchat">
          <WingChatView />
        </Route>
        <Route exact path="/wingstat">
          <WingStatView />
        </Route>
        <Route exact path="/contest">
          <ContestView />
        </Route>
        <Route exact path="/karen">
          <KarenView />
        </Route>
        <Route exact path="/videos">
          <VideoView />
        </Route>
        <Route exact path="/photos">
          <PhotoView />
        </Route>
      </Switch>
      <Col className="col-12 text-center mt-4">
          <small className="col-12"> Copyright &copy; 2019 Dylan Dunn. All Rights Reserved</small>
      </Col>
      </Container>
    </Router>
  );
}

class WingChatView extends React.Component {
  render() {
    return (
      <Jumbotron className="text-white mt-4 p-0 dark-color mb-0">
        <Row className="m-0 p-0">
          <Col>
          </Col>
          <Col className="light-color text-dark">
            <h1 className="display-4"> WingChat </h1>
            <p className="lead"> A Messenger For The Fellas</p>
            <p> Coming Soon... </p>
          </Col>
        </Row>
      </Jumbotron>
    )
  }
}

class ContestView extends React.Component {
  render() {
    return (
      <Jumbotron className="text-white mt-4 p-0 dark-color mb-0">
        <Row className="m-0 p-0">
          <Col>
          </Col>
          <Col className="light-color text-dark">
            <h1 className="display-4"> Contest </h1>
            <p className="lead"> Money For Whatever </p>
          </Col>
        </Row>
      </Jumbotron>
    )
  }
}

class KarenView extends React.Component {
  render() {
    return(
      <Jumbotron className="text-white mt-4 p-0 dark-color mb-0">
        <Row className="m-0 p-0">
          <Col>
            <Image className="m-0 p-0 no-gutters" src='/img/karen.png' fluid/>
          </Col>
          <Col className="light-color text-dark">
            <h1 className="display-4"> Karen </h1>
            <p className="lead"> Life Automation API </p>
            <Row className="ml-0 p-0">
              <Button variant="dark" href="/karen/dashboard"> 
                <span> Go To Dashboard  </span>
                <i className="fa fa-arrow-circle-right"/>
               </Button>
            </Row>
          </Col>
        </Row>
      </Jumbotron>
    )
  }
}

class NavbarView extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {isLoggedin: false}

    this.logout = this.logout.bind(this);

  }

  componentDidMount() {
    fetch('/api/auth', {method: 'GET'})
      .then(res => res.json())
      .then(res => {
          if(res.content === "Authorized") {
            this.setState({isLoggedin: true});
          } else {
            this.setState({isLoggedin: false});
          }
      });
  }

  logout() {
    fetch('/api/auth', {method: 'DELETE'})
      .then(res => res.json())
      .then(res => {
          this.setState({ isLoggedin: false });
      });
  }

  render() {

    let loginButton;
    if(this.state.isLoggedin) {
      loginButton = <Button onClick={this.logout} variant="outline-secondary text-white">Logout</Button>
    } else {
      loginButton = <Button href="/login" variant="outline-secondary text-white">Login</Button>
    }

    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">Dylan Dunn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/photos">Photos</Nav.Link>
            <Nav.Link href="/videos">Videos</Nav.Link>
            <Nav.Link href="/podcast">Podcast</Nav.Link>
            <NavDropdown title="More" variant="dark" id="basic-nav-dropdown">
              <NavDropdown.Header>Wings For The Fellas</NavDropdown.Header>
              <NavDropdown.Item href="/wingchat"> WingChat </NavDropdown.Item>
              <NavDropdown.Item href="/wingstat"> WingStat </NavDropdown.Item>
              <NavDropdown.Header>Other</NavDropdown.Header>
              <NavDropdown.Item href="/karen"> Karen </NavDropdown.Item>
              <NavDropdown.Item href="/contest"> Current Contest </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {loginButton}
        </Navbar.Collapse>
      </Navbar>
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

export default App;
