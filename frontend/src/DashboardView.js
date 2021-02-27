import {
    Jumbotron,
    Row,
    Col,
    ListGroup
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
                <ListGroup>
                    <ListGroup.Item href="/post/create" action className="text-white d-flex justify-content-between col-12 align-items-center">
                        <span>
                            <i className="fa fa-plus mr-2"/>
                            Create New Post
                        </span>
                        <i className="fa fa-chevron-right" />
                    </ListGroup.Item>
                    <ListGroup.Item href="/post/create" action className="text-white d-flex justify-content-between col-12 align-items-center">
                        <span>
                            <i className="fa fa-users mr-2"/>
                            Manage Users
                        </span>
                        <i className="fa fa-chevron-right" />
                    </ListGroup.Item>
                    <ListGroup.Item href="/video/create" action className="text-white d-flex justify-content-between col-12 align-items-center">
                        <span>
                            <i className="fa fa-gear mr-2"/>
                            Site Settings
                        </span>
                        <i className="fa fa-chevron-right" />
                    </ListGroup.Item>
                </ListGroup>
          </Col>
          <Col className="col-md-6 col-xs-12 light-color text-dark">
              <h1 className="display-4"> Dashboard </h1>
              <p className="lead">Manage Content and Users</p>
          </Col>
        </Row>
      </Jumbotron>
      )
    }
}

export default DashboardView;