import React, { useRef } from 'react';
import { Form, Button, Card } from 'react-bootstrap'
// import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        const user = { username: emailRef.current.value, password: passwordRef.current.value };
        axios.post('localhost:8080/user/create', { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Sign Up</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef} required />
                        </Form.Group>
                        <Button className="w-100" type='submit'>
                            Sign Up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Already have an account? <Link to='/login'>Log In</Link>
            </div>
        </>
    )
}