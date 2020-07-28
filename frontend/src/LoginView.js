import {
    Jumbotron,
    Row,
    Col, 
    Button,
    Form,
    Alert
} from "react-bootstrap";


import {
    withRouter,
    Link
} from "react-router-dom";

import React from 'react';
class LoginView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {loginEmail: '', loginPassword: '', isLoggedin: false, alertContent: ''};

        this.handleLoginEmailChange = this.handleLoginEmailChange.bind(this);
        this.handleLoginPasswordChange = this.handleLoginPasswordChange.bind(this);
        this.handleLoginFormSubmit = this.handleLoginFormSubmit.bind(this);
    }

    componentDidMount() {
        fetch('/api/auth', {method: 'GET'})
        .then(res => res.json())
        .then(res => {
            if(res.content === 'Authorized') {
                this.props.history.push("/dashboard");
            }
        });
    }
    
    handleLoginEmailChange(event) {
        this.setState({loginEmail: event.target.value});
    }

    handleLoginPasswordChange(event) {
        this.setState({loginPassword: event.target.value});
    }

    handleLoginFormSubmit(event) {
        fetch('/api/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.loginEmail,
                password: this.state.loginPassword
             })
        })
        .then(res => res.json())
        .then(res => {
            if(res.content) {
                window.location.assign("/dashboard");
            } else {
                this.setState({alertContent: res.error});
            }
        });
        event.preventDefault();
    }

    render() {
        
        let alert;
        if(this.state.alertContent !== '') {
            alert = <Alert variant="danger"> {this.state.alertContent} </Alert>
        } else {
            alert = <> </>
        }

      return (
        <Jumbotron className="text-white mt-4 p-0 dark-color mb-0">
            {alert}
            <Row className="m-0 p-0">
                <Col xs={12} md={6} className="col-md-6 col-xs-12 dark-color text-light">
                    <h1 className="display-4"> Create Account </h1>
                    <Form className="mb-4">
                        <Row className="mt-4">
                        <Col>
                            <Form.Control name="first-name" type="text" placeholder="First Name"/>
                        </Col>
                        <Col>
                            <Form.Control name="last-name" type="text" placeholder="Last Name"/>
                        </Col>
                        </Row>
                        <Row className="mt-4 pl-3 col-4">
                        <select name="gender" className="form-control">
                            <option defaultValue>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                        </Row>
                        <Row className="mt-4">
                        <Col>
                            <Form.Control onChange={this.handleLoginEmailChange} type="email " placeholder="Email Address"/>
                        </Col>
                        </Row>
                        <Row className="mt-4">
                        <Col>
                            <Form.Control onChange={this.handleLoginEmailChange} name="password" type="password" placeholder="Password"/>
                        </Col>
                        </Row>
                        <Row className="mt-4 mr-0 pull-right mb-3">
                        <Button variant="dark" size="lg"> Create Account </Button>
                        </Row>
                    </Form>
                </Col>
                <Col xs={12} md={6} className="col-md-6 col-xs-12 light-color text-dark">
                    <h1 className="display-4"> Login </h1>
                    <Form className="mb-4"  onSubmit={this.handleLoginFormSubmit}>
                        <Row className="mt-4">
                        <Col>
                            <Form.Control onChange={this.handleLoginEmailChange} value={this.state.loginEmail} type="email " placeholder="Email Address"/>
                        </Col>
                        </Row>
                        <Row className="mt-4">
                        <Col>
                            <Form.Control onChange={this.handleLoginPasswordChange} value={this.state.loginPassword} type="password" placeholder="Password"/>
                        </Col>
                        </Row>
                        <Row className="ml-0 mt-4">
                        <Link to="/forgotPassword" >Forgot Password?</Link>
                        </Row>
                        <Row className="mt-4 mr-0 pull-right mb-3">
                        <Button type="submit" variant="dark" size="lg"> Login </Button>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Jumbotron>
      )
    }
}

export default withRouter(LoginView);