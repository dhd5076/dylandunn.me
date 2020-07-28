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

class PhotoView extends React.Component {
    render() {
      return (
        <>
          <Jumbotron className="text-white mt-4 p-0 dark-color mb-0">
            <Row className="m-0 p-0">
              <Col xs={12} md={6} className="m-0 p-0">
                <Image src='./img/span.jpg' fluid/>
              </Col>
              <Col className="col-md-6 col-xs-12 light-color text-dark">
                  <h1 className="display-4"> Photos </h1>
                  <p className="lead">Lorem Ipsum.</p>
                  <p>Lorem Ipsum</p>
              </Col>
            </Row>
          </Jumbotron>
          <Row className="no-gutters pt-4">
          <CardColumns>
              <Card>
                    <Card.Img variant="top" src='./img/paella.jpg'/>
                    <Card.Body>
                        <Card.Title className="text-dark"> Example Picture </Card.Title>
                        <Card.Text className="text-dark"> Ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </Card.Text>
                        <Button variant="dark">Watch</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
              </Card>
          </CardColumns>
        </Row>
      </>
      )
    }
  }

export default PhotoView;