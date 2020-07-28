import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { 
  Container,
  Row,
  Col,
  Jumbotron
} from "react-bootstrap";

import BlogView from "./BlogView";
import WingStatView from "./WingStatView";
import LoginView from "./LoginView";
import VideoView from "./VideoView";
import PhotoView from "./PhotoView";
import ProfileView from "./ProfileView";
import DashboardView from "./DashboardView";
import KarenView from "./KarenView";
import NavbarView from "./NavbarView";

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
        <Route exact path="/dashboard">
          <DashboardView />
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
