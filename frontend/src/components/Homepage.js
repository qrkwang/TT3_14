import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav, Card, Stack } from 'react-bootstrap';
import axios from 'axios'
import {Link, useLocation} from "react-router-dom";

function Homepage(props) {
    const initialValue =[ { Post_Title: '', Post_Description : '', Post_image :'' }];
    const { state } = useLocation();

    const [listOfUsers, setListofUsers] = useState(initialValue);

    useEffect(() => {
        console.log("state ", state[0].User_ID);
        console.log("test");
        axios.get('http://localhost:8080/post/getall')
            .then(res => {
                console.log(res.status);
                if (res.status.toString()=== "200") {
                    setListofUsers(res.data);
                    console.log(res.data);
                }
            })
    }, [])

    return (
        <Card>
            <Card.Body>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand>Social-Engagement</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href='/login'>Logout</Nav.Link>
                                <Nav.Link href="/signup">Sign Up</Nav.Link>
                                <Nav.Link as={Link}
                                          to={{
                                              pathname: '/myposts',
                                              state: { userId: state[0].User_ID},
                                          }}>My Posts</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Container>
                    <Stack gap={1}>
                        {listOfUsers.map((post) => {
                            return (
                                <div className='bg-light border'>
                                    <h2>Title: {post.Post_Title}</h2>
                                    <p>Description: {post.Post_Description}</p>
                                    <img
                                        src={post.Post_image}
                                        alt="new"
                                    />
                                </div>
                            );
                        })}
                    </Stack>
                </Container>
            </Card.Body>
        </Card>
    )
}

export default Homepage;
