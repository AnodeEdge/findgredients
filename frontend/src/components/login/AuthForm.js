import React from 'react'
import { Form } from 'react-bootstrap'


function AuthForm(props) {
    return (
        <>
            <Form.Group controlId="formSignupEmail">
                <Form.Label>E-mail address</Form.Label>
                <Form.Control
                    required
                    type="email"
                    placeholder="Enter email"
                    onChange={(evt) => { props.setEmail(evt.target.value) }} />
                <Form.Control.Feedback type="invalid">Please provide valid username.</Form.Control.Feedback>
                <Form.Text>We'll never share your e-mail with anyone else</Form.Text>
            </Form.Group>
            <div style={{ "height": "1em" }}></div>
            <Form.Group controlId="formSignupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    required
                    type="password"
                    placeholder="Enter password"
                    onChange={(evt) => { props.setPassword(evt.target.value) }} />
                <Form.Control.Feedback type="invalid">Please provide valid password.</Form.Control.Feedback>
            </Form.Group>
        </>
    )
}

export default AuthForm