import React from 'react'
import { Nav, Container } from 'react-bootstrap'

const Navbar = () => {
    return (
        <Container>
            <div id='edit-tabs'>
                <Nav variant="tabs" defaultActiveKey="home">
                    <Nav.Item>
                        <Nav.Link eventKey={"home"}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </Container>
    )
}

export default Navbar