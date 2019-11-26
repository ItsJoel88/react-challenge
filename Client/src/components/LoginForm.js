import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Form, Button } from 'react-bootstrap'

const LoginForm = (props) => {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailValue = (e) => {
        setEmail(e.target.value)
    }

    const passwordValue = (e) => {
        setPassword(e.target.value)
    }

    const loginHandler = (e) => {
        e.preventDefault()
        localStorage.setItem('token', email)
        history.replace('/')
    }

    return (
        <div className="container">
            <Form onSubmit={loginHandler}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={emailValue} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={passwordValue} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
            </Button>
            </Form>
        </div>
    )
}


export default LoginForm
