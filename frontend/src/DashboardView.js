import {
    Jumbotron,
    Row,
    Col
} from "react-bootstrap";

import React from 'react';

class DashboardView extends React.Component {

    UNSAFE_componentWillMount() {
        fetch('/api/auth', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then(res => {
            if(res.content !== "Authorized") {
                window.location.assign("/login?redirect=/dashboard");
            } else {
                this.setState({alertContent: res.error});
            }
        });
    }

    render() {
      return (

        <Jumbotron className="text-white mt-4 p-0 dark-color mb-0">
          <Row className="m-0 p-0">
            <Col xs={12} md={6} className="m-0 p-0">
             
            </Col>
            <Col xs={12} md={6} className="light-color text-dark">
            </Col>
          </Row>
        </Jumbotron>
      )
    }
}

export default DashboardView;