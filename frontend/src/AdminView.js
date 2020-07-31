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

class AdminView extends React.Component {

    componentWillMount() {
        fetch('/api/auth', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then(res => {
            if(res.content !== "Authorized") {
                window.location.assign("/login?redirect=/admin");
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
              <Col xs={12} md={6} className="m-0 p-0">
                <Image src='./img/paella.jpg' fluid/>
              </Col>
              <Col className="col-md-6 col-xs-12 light-color text-dark">
                  <h1 className="display-4"> Admin </h1>
                  <p className="lead">Lorem Ipsum.</p>
                  <p>Lorem Ipsum</p>
              </Col>
            </Row>
          </Jumbotron>
          <Row className="no-gutters pt-4">
          <CardColumns>
              <Card>
                  <Card.Img variant="top" src='./img/bak.jpg'/>
                  <Card.Body>
                    <Card.Title className="text-dark"> Example Picture </Card.Title>
                    <Card.Text className="text-dark"> Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. </Card.Text>
                  </Card.Body>
              </Card>
              <Card>
                  <Card.Body>
                    <Card.Title className="text-dark"> Example Article </Card.Title>
                    <Card.Text className="text-dark"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Card.Text>
                    <Button variant="dark">Read</Button>
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

export default AdminView;