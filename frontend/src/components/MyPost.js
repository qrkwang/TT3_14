import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav, Card, Stack } from 'react-bootstrap';
import axios from 'axios'
import {useLocation} from "react-router-dom";

function MyPost() {
    const initialValue =[ { Post_Title: '', Post_Description : '', Post_images :'' }];

    const [listOfUsers, setListofUsers] = useState(initialValue);
    const { userId } = useLocation();

    useEffect(() => {
        console.log("user id", userId);
        console.log("test");
        axios.get('http://localhost:8080/post/post/user/' + userId)
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
                <Navbar bg="dark" expand="lg">
                    <Container>
                        <Navbar.Brand>Social-Engagement</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href='/homepage'>Home </Nav.Link>
                                <Nav.Link href='/login'>Logout</Nav.Link>
                                <Nav.Link href="/signup">Sign Up</Nav.Link>
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

export default MyPost;
