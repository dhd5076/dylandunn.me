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

        this.state = {
            loginEmail: '',
            loginPassword: '',
            createEmail: '',
            createPassword: '',
            createFirstName: '',
            createLastName: '',
            isLoggedin: false,
            alertContent: '',
            creationSuccess: false
        };

        this.handleLoginEmailChange = this.handleLoginEmailChange.bind(this);
        this.handleLoginPasswordChange = this.handleLoginPasswordChange.bind(this);
        this.handleLoginFormSubmit = this.handleLoginFormSubmit.bind(this);

        this.handleCreateFirstNameChange = this.handleCreateFirstNameChange.bind(this);
        this.handleCreateLastNameChange = this.handleCreateLastNameChange.bind(this);
        this.handleCreateEmailChange = this.handleCreateEmailChange.bind(this);
        this.handleCreatePasswordChange = this.handleCreatePasswordChange.bind(this);
        this.handleCreateFormSubmit = this.handleCreateFormSubmit.bind(this);
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

    handleCreateEmailChange(event) {
        this.setState({createEmail: event.target.value});
    }

    handleCreatePasswordChange(event) {
        console.log("asdasdasd");
        this.setState({createPassword: event.target.value});
    }

    handleCreateFirstNameChange(event) {
        this.setState({createFirstName: event.target.value});
    }

    handleCreateLastNameChange(event) {
        this.setState({createLastName: event.target.value});
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

    handleCreateFormSubmit(event) {
        fetch('/api/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstname: this.state.createFirstName,
                lastname: this.state.createLastName,
                email: this.state.createEmail,
                password: this.state.createPassword
             })
        })
        .then(res => res.json())
        .then(res => {
            if(res.error === 'null') {
                this.setState({
                    creationSuccess: true,
                    alertContent: ''
                })
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

        let createSuccess;
        if(this.state.creationSuccess) {
            createSuccess = <Alert variant="success"> Account Created Successfully! </Alert>
        } else {
            createSuccess = <> </>
        }

      return (
        <Jumbotron className="text-white mt-4 p-0 dark-color mb-0">
            {alert}
            {createSuccess}
            <Row className="m-0 p-0">
                <Col xs={12} md={6} className="col-md-6 col-xs-12 dark-color text-light">
                    <h1 className="display-4"> Create Account </h1>
                    <Form className="mb-4" onSubmit={this.handleCreateFormSubmit}>
                        <Row className="mt-4">
                        <Col>
                            <Form.Control onChange={this.handleCreateFirstNameChange} name="first-name" type="text" placeholder="First Name"/>
                        </Col>
                        <Col>
                            <Form.Control onChange={this.handleCreateLastNameChange} name="last-name" type="text" placeholder="Last Name"/>
                        </Col>
                        </Row>
                        <Row className="mt-4">
                        <Col>
                            <Form.Control onChange={this.handleCreateEmailChange} type="email " placeholder="Email Address"/>
                        </Col>
                        </Row>
                        <Row className="mt-4">
                        <Col>
                            <Form.Control onChange={this.handleCreatePasswordChange} name="password" type="password" placeholder="Password"/>
                        </Col>
                        </Row>
                        <Row className="mt-4 mr-0 pull-right mb-3">
                        <Button type="submit" variant="dark" size="lg"> Create Account </Button>
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