import {
    Jumbotron,
    Row,
    Col, 
    ListGroup
} from "react-bootstrap";

import React from 'react';

class DashboardView extends React.Component {

    componentWillMount() {
        fetch('/api/auth', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then(res => {
            if(res.content !== "Authorized") {
                window.location.assign("/login");
            } else {
                this.setState({alertContent: res.error});
            }
        });
    }

    render() {
      return (
        <>
          <Jumbotron className="text-white mt-4 p-0 dark-color mb-0">
            <Row className="m-0 p-0">
              <Col xs={12} md={3} className="m-0 p-0">
                <ListGroup variant="unstyled">
                    <ListGroup.Item>
                        asdasdasda
                    </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col xs={12} md={9} className="light-color text-dark">
                  <h1 className="display-4"> Dashboard </h1>
                  <p className="lead">Lorem Ipsum.</p>
                  <p>Lorem Ipsum</p>
              </Col>
            </Row>
          </Jumbotron>
          <Row className="no-gutters pt-4">
        </Row>
      </>
      )
    }
  }

export default DashboardView;