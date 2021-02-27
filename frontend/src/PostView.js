import {
    Card,
    CardColumns,
    Jumbotron,
    Row,
    Col, 
    Image
} from "react-bootstrap";

import React from 'react';

class BlogView extends React.Component {

    constructor(props) {
      super(props);
      this.state ={
        posts: []
      }
    }

    componentDidMount() {
      fetch("https://localhost:3000/post/")
      .then(res => res.json())
      .then(
        (posts) => {
          this.setState({
            isLoaded: true,
            post: posts
          })
        }
      )
    }

    render() {
      var posts = this.state.posts;
      return (
        <>
          <Jumbotron className="text-white mt-4 p-0 dark-color mb-0">
            <Row className="m-0 p-0">
              <Col xs={12} md={6} className="m-0 p-0">
                <Image src='./img/paella.jpg' fluid/>
              </Col>
              <Col className="col-md-6 col-xs-12 light-color text-dark">
                  <h1 className="display-4"> Blog </h1>
                  <p className="lead">Lorem Ipsum.</p>
                  <p>Lorem Ipsum</p>
              </Col>
            </Row>
          </Jumbotron>
          <Row className="no-gutters pt-4">
          <CardColumns>
              {posts.map(post => (
                <Card>
                  <Card.Img variant="top" src='./img/bak.jpg'/>
                  <Card.Body>
                    <Card.Title className="text-dark"> Example Picture </Card.Title>
                    <Card.Text className="text-dark"> Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. </Card.Text>
                  </Card.Body>
                </Card>
              ))}
          </CardColumns>
        </Row>
      </>
      )
    }
  }

export default BlogView;