import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { register } from '../store/actions'

import { Form, Button } from 'react-bootstrap'

const RegisterForm = (props) => {
    const errorRegister = useSelector((state) => state.register.error)
    const dispatch = useDispatch()
    const history = useHistory()

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const emailValue = (e) => {
        setEmail(e.target.value)
    }

    const passwordValue = (e) => {
        setPassword(e.target.value)
    }

    const nameValue = (e) => {
        setName(e.target.value)
    }

    const registerHandler = (e) => {
        e.preventDefault()
        dispatch(register({ name, email, password, history }))
        setName('')
        setPassword('')
        setEmail('')
    }

    return (
        <div>
            <div className="error">
                {
                    errorRegister ?
                        errorRegister.map((error, i) => <p style={{ color: 'red' }} key={i}>{error}</p>) : ''
                }
            </div>
            <Form onSubmit={registerHandler}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={nameValue} value={name} type="text" placeholder="Enter name" required />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={emailValue} value={email} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={passwordValue} value={password} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
            </Button>
            </Form>
        </div>
    )
}

export default RegisterForm
