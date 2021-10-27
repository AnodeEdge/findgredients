import React from "react";
import { Modal, Button, Form, Navbar } from 'react-bootstrap'

function LogoutModal(props) {
    const handleSignout = () => {
        props.setJWT("")
        props.setEmail("") 
        props.setShow(false)
    }
    
    const handleClose = () => {
        props.setShow(false)
    }

    return (
        <Modal
            show={props.show}
            onHide={handleClose}
            backdrop="static"
            keyboard={true}
            centered
            size="sm"
        >
            <Modal.Header style={{"border-bottom": "none"}}>
                <Modal.Title>Are you sure you want to logout?</Modal.Title>
            </Modal.Header>
            <Modal.Footer style={{"border-top": "none"}}>
                <Button variant="primary" onClick={handleSignout} >
                    Yes
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    No
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default LogoutModal

