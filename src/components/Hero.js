import React from 'react'
import { Card, Row, Col, ProgressBar } from 'react-bootstrap'
import Navbar from './Navbar'

const Hero = () => {
    return (
        <div>
            <section className="hero-section">
                <Navbar></Navbar>
                <div className="container px-0 py-3">
                    <Card style={{ background: "transparent" }}>
                        <Card.Body className='p-4'>
                            <Row>
                                <Col md={6}>
                                    <div className='intro'>
                                        <div className="text-white fs-1"><h1>Hello!<br /> I'm <span className="text-info"> Naim Tarafder</span></h1>
                                            <p className="text-white">I am a React developer.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="py-5 text-white">
                                        <div className='mb-3'>
                                            <p className='m-0'>HTML/CSS</p>
                                            <ProgressBar now={80} label={`${80}%`} variant="info" className='progress-bar' />
                                        </div>
                                        <div className='mb-3'>
                                            <p className='m-0'>Javascript</p>
                                            <ProgressBar now={80} label={`${80}%`} variant="info" className='progress-bar' />
                                        </div>
                                        <div className='mb-3'>
                                            <p className='m-0'>React</p>
                                            <ProgressBar now={80} label={`${80}%`} variant="info" className='progress-bar' />
                                        </div>
                                        <div className='mb-3'>
                                            <p className='m-0'>NextJS</p>
                                            <ProgressBar now={80} label={`${80}%`} variant="info" className='progress-bar' />
                                        </div>
                                    </div>
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