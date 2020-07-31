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

import BlogView from "./BlogView";
import WingStatView from "./WingStatView";
import LoginView from "./LoginView";
import VideoView from "./VideoView";
import PhotoView from "./PhotoView";
import ProfileView from "./ProfileView";
import DashboardView from "./DashboardView";
import KarenView from "./KarenView";
import NavbarView from "./NavbarView";
import WingChatView from "./WingChatView";
import ContestView from "./WingChatView";
import AdminView from "./AdminView";

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
        <Route exact path="/admin">
          <AdminView />
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
