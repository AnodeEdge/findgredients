import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Link,
  } from 'react-router-dom'


function TopNav(props) {

    const handleProfile = (event) => {
        props.setShowModal(true)
    }

    const handleLogout = () => {
        props.setShowLogout(true)
    }

    const showLoginStatus = () => {
        if (props.jwt) { 
            return true } 
        return false
    }

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link to="/"><Navbar.Brand>Recip!ease</Navbar.Brand></Link>
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/search">Search</Link></Nav.Link>
                        <Nav.Link><Link to="/favorites">Favorites</Link></Nav.Link>
                        {showLoginStatus() ? 
                            <Nav.Link><Link onClick={handleLogout}>Logout</Link></Nav.Link> : 
                            <Nav.Link><Link onClick={handleProfile}>Login</Link></Nav.Link>
                        }
                        
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default TopNav