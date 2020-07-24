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
  Carousel,
  CardColumns,
  Card
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
      <Jumbotron className="mt-4 p-0 pt-4 text-white">
        <Row>
          <Col xs={5}>
            <Image src={require('./img/profileT.png')} className="border-0" fluid rounded/>
          </Col>
          <Col>
            <Row>
              <Col>
              <h1>Dylan Dunn</h1>
              <p>Jack of all trades. Master Of None</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Carousel className="mr-4 ml-0 pl-0">
                  <Carousel.Item>
                  <Image className="d-block w-100" src='https://article.images.consumerreports.org/f_auto/prod/content/dam/CRO-Images-2020/Magazine/05May/CR-Health-Inlinehero-HealthyFastFood-3-20-v2' alt="Third slide"/>
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                  <Image className="d-block w-100" src='https://article.images.consumerreports.org/f_auto/prod/content/dam/CRO-Images-2020/Magazine/05May/CR-Health-Inlinehero-HealthyFastFood-3-20-v2' alt="Third slide"/>
                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>
          </Col>
        </Row>
      </Jumbotron>
    )
  }
}


class PictureView extends React.Component {
  render() {
    return (
      <CardColumns>
          <Card>
              <Card.Img src={require('./img/paella.jpg')}/>
          </Card>
          <Card>
              <Card.Img src={require('./img/bak.jpg')}/>
          </Card>
          <Card>
              <Card.Img src={require('./img/span.jpg')}/>
          </Card>
          <Card>
              <Card.Img src={require('./img/pork.jpg')}/>
          </Card>
          <Card>
              <Card.Img src={require('./img/crepe.jpg')}/>
          </Card>
          <Card>
              <Card.Img src={require('./img/gai.jpg')}/>
          </Card>
      </CardColumns>
    )
  }
}

export default App;
