import {
    Button,
    Navbar,
    NavDropdown,
    Nav,
    Dropdown,
    ButtonGroup
} from "react-bootstrap";

import React from 'react';

class NavbarView extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {isLoggedin: false}

        this.logout = this.logout.bind(this);

    }

    componentDidMount() {
        fetch('/api/auth', {method: 'GET'})
        .then(res => res.json())
        .then(res => {
            if(res.content === "Authorized") {
                this.setState({isLoggedin: true});
            } else {
                this.setState({isLoggedin: false});
            }
        });
    }

    logout() {
        fetch('/api/auth', {method: 'DELETE'})
        .then(res => res.json())
        .then(res => {
            this.setState({ isLoggedin: false });
        });
        window.location.assign("/");
    }

    render() {

        let loginButton;
        if(this.state.isLoggedin) {
        loginButton =   <>
                        <Dropdown as={ButtonGroup}>
                            <Button href="/dashboard" className="text-white" variant="outline-secondary"> Account </Button>
                            <Dropdown.Toggle className="text-white" split variant="outline-secondary" id="dropdown-split-basic" />
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={this.logout} > Logout </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </>
        } else {
        loginButton = <Button href="/login" variant="outline-secondary text-white">Login</Button>
        }

        return (
        <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">Dylan Dunn</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/blog">Blog</Nav.Link>
                <Nav.Link href="/photos">Photos</Nav.Link>
                <Nav.Link href="/videos">Videos</Nav.Link>
                <Nav.Link href="/podcast">Podcast</Nav.Link>
                <NavDropdown title="More" variant="dark" id="basic-nav-dropdown" className="mb-1">
                    <NavDropdown.Header>Wings For The Fellas</NavDropdown.Header>
                    <NavDropdown.Item href="/wingchat"> WingChat </NavDropdown.Item>
                    <NavDropdown.Item href="/wingstat"> WingStat </NavDropdown.Item>
                    <NavDropdown.Header>Other</NavDropdown.Header>
                    <NavDropdown.Item href="/karen"> Karen </NavDropdown.Item>
                    <NavDropdown.Item href="/contest"> Current Contest </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            {loginButton}
            </Navbar.Collapse>
        </Navbar>
        )
    }
}

export default NavbarView;