import React from 'react';
import { Container, Navbar, Nav, Card } from 'react-bootstrap';

function Homepage() {
    return (
        <Card>
            <Card.Body>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand>Social-Engagement</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href='/Logout'>Logout</Nav.Link>
                                <Nav.Link href="/signup">Sign Up</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Card.Body>
        </Card>
    )
}

export default Homepage;
