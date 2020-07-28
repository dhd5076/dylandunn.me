import {
    Jumbotron,
    Row,
    Col, 
    Button,
    Image,
    ButtonToolbar,
    ButtonGroup
} from "react-bootstrap";

import React from 'react';

class ProfileView extends React.Component {
    render() {
      return (
        <Jumbotron className="text-white mt-4 p-0 dark-color mb-0">
            <Row className="m-0 p-0">
            <Col xs={12} md={6} className="m-0 p-0">
                <Image src='./img/Head.png' fluid/>
            </Col>
            <Col className="col-md-6 col-xs-12 light-color text-dark">
                <h1 className="display-4"> Dylan Dunn </h1>
                <p className="lead">Jack Of All Trades. Master Of None.</p>
                <ButtonToolbar className="mb-4">
                    <ButtonGroup className="mr-2" aria-label="First group">
                    <Button href="https://github.com/dhd5076" variant="dark">
                        <i className="fa fa-github"/>
                    </Button>
                    <Button href="https://instagram.com/dhd5076" variant="dark">
                        <i className="fa fa-instagram"/>
                    </Button>
                    <Button href="mailto:ddunn17@student.monroecc.edu" variant="dark">
                        <i className="fa fa-envelope"/>
                    </Button>
                    <Button href="https://www.linkedin.com/in/dylan-dunn-73558614a/"  variant="dark">
                        <i className="fa fa-linkedin"/>
                    </Button>
                    </ButtonGroup>
                </ButtonToolbar>
                <p>Culinary Arts</p>
                <p>Hospitality and Management</p>
                <p>Web Design</p>
                <p>Software Development</p>
                <p>Photography</p>
                <p>Video Editing</p>
            </Col>
            </Row>
        </Jumbotron>
      )
    }
  }

export default ProfileView;