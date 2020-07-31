import {
    Jumbotron,
    Row,
    Col, 
    Button,
    Image
} from "react-bootstrap";

import React from 'react';

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

export default KarenView;