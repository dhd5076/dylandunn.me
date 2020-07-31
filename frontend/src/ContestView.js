import React from 'react';

import { 
  Row,
  Col,
  Jumbotron
} from "react-bootstrap";

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

export default ContestView;