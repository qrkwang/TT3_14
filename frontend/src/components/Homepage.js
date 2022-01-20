import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav, Card } from 'react-bootstrap';
// import Axios from 'axios'

function Homepage() {
    const [listOfUsers, setListofUsers] = useState([{ name: 'Michael', age: 20 }]);

    // useEffect(() => {
    //     Axios.get('localhost:8080/post/getall')
    // }, [])

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
                <Container>
                    {listOfUsers.map((user) => {
                        return (
                            <div>
                                <h2>Name: {user.name}</h2>
                                <p>Age: {user.age}</p>
                            </div>
                        );
                    })}
                </Container>
            </Card.Body>
        </Card>
    )
}

export default Homepage;
