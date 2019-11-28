import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { login } from '../store/actions'

import { Form, Button } from 'react-bootstrap'
import { useAlert } from 'react-alert'


const LoginForm = (props) => {
    const errorLogin = useSelector((state) => state.login.error)
    const dispatch = useDispatch()
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const alert = useAlert()

    const emailValue = (e) => {
        setEmail(e.target.value)
    }

    const passwordValue = (e) => {
        setPassword(e.target.value)
    }

    const loginHandler = (e) => {
        dispatch(login({ email, password, history, alert }))
        e.preventDefault()
        setEmail('')
        setPassword('')
    }

    return (
        <div className="container">
            <p style={{ color: 'red' }}>{errorLogin}</p>
            <Form onSubmit={loginHandler}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={emailValue} value={email} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={passwordValue} value={password} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
            </Button>
            </Form>
            <br />
            <Link to="/register">Don't Have an account ?</Link>
        </div>
    )
}


export default LoginForm
