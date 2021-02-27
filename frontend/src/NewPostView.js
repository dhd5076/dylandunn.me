import {
    Jumbotron,
    Row,
    Col, 
    Form,
    Button
} from "react-bootstrap";

import React from 'react';

class ProfileView extends React.Component {

    handleSubmit(event) {
        event.preventDefault();

        const image = event.target.image
        const formData = new FormData(event.target)
        formData.append('image', image[0])

        fetch('/api/post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: formData
        });
    }

    render() {
      return (
        <Jumbotron className="text-white mt-4 p-0 dark-color mb-0">
            <Row className="m-0 p-0">
            <Col xs={12} md={6} className="m-0 p-4">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label> Post Title </Form.Label>
                        <Form.Control name="title" type="text" placeholder="Post Title" />
                    </Form.Group>

                    <Form.Group>
                        <Form.File name="image" label="Post Image" type="file"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label> Post Content </Form.Label>
                        <Form.Control name="content" rows="3" as="textarea" placeholder="Write Something..." />
                    </Form.Group>

                    <Button type="submit" className="pull-right" size="lg" variant="primary"> Post </Button>
                </Form>
            </Col>
            <Col className="col-md-6 col-xs-12 light-color text-dark">
                <h1 className="display-4"> New Post </h1>
                <p className="lead">Lorem Ipsum.</p>
            </Col>
            </Row>
        </Jumbotron>
      )
    }
  }

export default ProfileView;