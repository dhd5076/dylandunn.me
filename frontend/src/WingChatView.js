import {
    Jumbotron,
    Row,
    Col
} from "react-bootstrap";

import React from 'react';

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

export default WingChatView;