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
                        <Nav.Link href='#project'>Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='#about'>About</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </Container>
    )
}

export default Navbar