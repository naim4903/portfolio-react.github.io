import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import Navbar from './Navbar'

const Hero = () => {
    return (
        <div>
            <section className="hero-section">
                <Navbar></Navbar>
                <div className="container py-3">
                    <Card style={{ background: "transparent" }}>
                        <Card.Body className='p-4'>
                            <Row>
                                <Col md={8}>
                                    <div className='intro'>
                                        <div className="text-white"><h1>Hello!<br /> I'm <span className="text-primary"> Naim Tarafder</span></h1>
                                            <p className="text-white">I am a React developer.</p>
                                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Projects</button>
                                        </div>
                                        {/* <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"> */}
                                        {/* </div> */}
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <img className="rounded-lg-3 img-fluid" src='/images/naim.jpg' alt="" width="" height="" />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </div>
            </section>
            <div className="b-example-divider"></div>

        </div>
    )
}

export default Hero