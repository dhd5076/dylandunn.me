import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { 
  Container,
  Col,
} from "react-bootstrap";

import BlogView from "./PostView";
import LoginView from "./LoginView";
import ProfileView from "./ProfileView";
import DashboardView from "./DashboardView";
import KarenView from "./KarenView";
import NavbarView from "./NavbarView";
import NewPostView from "./NewPostView";

function App() {
  return (
    <Router>
      <Container className="p-2">
        <NavbarView loggedIn={false} />
      <Switch>
        <Route exact path="/post/create">
          <NewPostView />
        </Route>
        <Route exact path="/">
          <HomeView />
        </Route>
        <Route exact path="/posts">
          <BlogView />
        </Route>
        <Route exact path="/login">
          <LoginView />
        </Route>
        <Route exact path="/karen">
          <KarenView />
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
