import {
    Card,
    CardColumns,
    Jumbotron,
    Row,
    Col, 
    Button,
    Image
} from "react-bootstrap";

import React from 'react';

class VideoView extends React.Component {
    render() {
      return (
        <>
          <Jumbotron className="text-white mt-4 p-0 dark-color mb-0">
            <Row className="m-0 p-0">
              <Col xs={12} md={6} className="m-0 p-0">
                <Image src='./img/bak.jpg' fluid/>
              </Col>
              <Col className="col-md-6 col-xs-12 light-color text-dark">
                  <h1 className="display-4"> Videos </h1>
                  <p className="lead">Lorem Ipsum.</p>
                  <p>Lorem Ipsum</p>
              </Col>
            </Row>
          </Jumbotron>
          <Row className="no-gutters pt-4">
          <CardColumns>
              <Card>
                  <Card.Img variant="top" src='./img/test.jpg'/>
                  <Card.Body>
                    <Card.Title className="text-dark"> Example Video </Card.Title>
                    <Card.Text className="text-dark"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </Card.Text>
                    <Button variant="dark">Watch</Button>
                  </Card.Body>
              </Card>
              <Card>
                  <Card.Img variant="top" src='./img/test.jpg'/>
                  <Card.Body>
                    <Card.Title className="text-dark"> Example Video </Card.Title>
                    <Card.Text className="text-dark"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </Card.Text>
                    <Button variant="dark">Watch</Button>
                  </Card.Body>
              </Card>
              <Card>
                  <Card.Img variant="top" src='./img/test.jpg'/>
                  <Card.Body>
                    <Card.Title className="text-dark"> Example Video </Card.Title>
                    <Card.Text className="text-dark"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </Card.Text>
                    <Button variant="dark">Watch</Button>
                  </Card.Body>
              </Card>
          </CardColumns>
        </Row>
      </>
      )
    }
  }

export default VideoView;