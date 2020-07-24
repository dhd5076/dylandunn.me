import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import { 
  Container,
  Image,
  Row,
  Col,
  Jumbotron
} from "react-bootstrap"

function App() {
  return (
    <Router>
      <Container>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded mt-2">
        <a class="navbar-brand" href="/">Dylan Dunn</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="/">Disabled</a>
            </li>
          </ul>
        </div>
      </nav>
      <ProfileView/>
      <PictureView/>
      </Container>
    </Router>
  );
}

class ProfileView extends React.Component {
  render() {
    return (
      <Jumbotron className="mt-4 p-0 pt-4 text-white">
        <Row>
          <Col xs={5}>
            <Image src="img/ProfileT.png" className="border-0" fluid rounded/>
          </Col>
          <Col>
          <h1>Dylan Dunn</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Col>
        </Row>
      </Jumbotron>
    )
  }
}


class PictureView extends React.Component {
  render() {
    return (
      <Row>
        <Col>
        </Col>
      </Row>
    )
  }
}

export default App;
