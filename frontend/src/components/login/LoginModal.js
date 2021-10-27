import React, { useState, useReducer, useEffect } from 'react'
import { Modal, Button, Form, Navbar } from 'react-bootstrap'
import { requestAuth } from '../../helpers/authRequestHandlers'
import AuthForm from './AuthForm'

function LoginModal(props) {
    // const [show, setShow] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLogin, setIsLogin] = useState(props.isLogin ? props.isLogin : true)
    const [validated, setValidated] = useState(false)
    // const [_, forceUpdate] = useReducer((x) => x + 1, 0)

    useEffect(() => {
        setIsLogin(props)
    }, [props.isLogin])

    const handleClose = () => { 
        props.setShow(false)
        setEmail("")
        setPassword("")
        setValidated(false)
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        setValidated(true)
        console.log(isLogin)
        console.log(isLogin ? "login" : "signup")
        const authResponse = await requestAuth(
            isLogin ? "login" : "signup", 
            {
                'email': email,
                'password': password,
            }
        )
        console.log(authResponse)
        if (isLogin === true && authResponse.token){
            props.setJWT(authResponse.token)
            props.setEmail(email)
            props.setShow(false)
        }
    }

    const handleTitle = () => {
        if (isLogin) {
            return "Login"
        }
        return "Sign-up"
    }

    const handleFormSwitch = (event) => {
        setIsLogin((currVal) => !currVal)
    }

    const handleDemoUser = async (event) => {
        event.preventDefault()
        const authResponse = await requestAuth(
            isLogin ? "login" : "signup", 
            {
                'email': "demo@demo",
                'password': "user",
            }
        )
        props.setJWT(authResponse.token)
        props.setEmail("Demo User")
        props.setShow(false)
    }

    return (
        <Modal
            show={props.show}
            onHide={handleClose}
            backdrop="static"
            keyboard={true}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>{handleTitle()}</Modal.Title>
            </Modal.Header>
            <Form noValidate validated={validated}>
                <Modal.Body>
                    <AuthForm
                        setEmail={setEmail}
                        setPassword={setPassword}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" style={{ "margin-right": "auto" }} onClick={handleDemoUser} >
                        Demo User
                    </Button>
                    <div>
                        {isLogin ?
                            <Navbar.Text>
                                Don't have an account?
                                <a href="#" style={{ "text-decoration": "none" }} onClick={handleFormSwitch}> Sign-up</a>
                            </Navbar.Text> :
                            <Navbar.Text>
                                Already have an account?
                                <a href="#" style={{ "text-decoration": "none" }} onClick={handleFormSwitch}> Login</a>
                            </Navbar.Text>}
                    </div>
                    <Button type="submit" variant="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default LoginModal