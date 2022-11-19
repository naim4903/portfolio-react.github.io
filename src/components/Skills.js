import React from 'react'
import { Card, ProgressBar, Row, Col, Form, Button } from 'react-bootstrap'

const Skills = () => {
    return (
        <section className="about-section pt-5" id="about">
            <div className="container py-5">
                <Card className='shadow-sm bg-dark text-white'>
                    <Card.Body className='p-4'>
                        <div>
                            <h4 className="text-muted">About me</h4>
                            <p className="lead fs-5 fw-normal">Hi I'm <span className='text-info'>Naim Tarafder</span>, An experienced <span className='text-info'>ReactJs developer</span>.
                                <br /> I have 6
                                months of experience working with <span className='text-info'>ReactJs,Redux,NextJs</span>.
                                I'm also familiar with Bootsrap,Git,Github,REST APIs,Sass,TypeScript,Postman,Material UI
                                .
                            </p>
                        </div>
                        <h4 className='text-muted'>Contact me</h4>
                        <Row>
                            <Col xs={12} md={4} lg={5} className="mb-2 ps-4">
                                <div className='d-block'>
                                    <i class="bi bi-linkedin me-2 fs-3"></i>
                                    <a href="https://www.linkedin.com/in/naim-tarafder-79145b166/" target="_blank">Linkedin</a>
                                </div>
                                <div className='d-block'>
                                    <i class="bi bi-github me-2 fs-2"></i>
                                    <a href="https://github.com/naim4903" target="_blank">GitHub</a>
                                </div>
                                <div className='d-block'>
                                    <i class="bi bi-envelope-fill me-2 fs-3"></i>
                                    <a href="mailto:naim4903@gmail.com" target="_blank">E-mail</a>
                                </div>
                                <div className='d-block'>
                                    <i class="bi bi-telephone-fill me-2 fs-3"></i>
                                    <a href="tel:+91 8582884903" target="_blank">+91 8582884903</a>
                                </div>
                            </Col>
                            <Col xs={12} md={8} lg={7}>
                                <Card className='bg-dark shadow shadow-lg'>
                                    <Card.Body>
                                        <Form>
                                            <Row className='mb-2'>
                                                <Col>
                                                    <Form.Group>
                                                        <Form.Control
                                                            placeholder='Name'
                                                            className='bg-dark text-white'
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row className="mb-2">
                                                <Col>
                                                    <Form.Group>
                                                        <Form.Control
                                                            placeholder='Email'
                                                            type='email'
                                                            className='bg-dark text-white'
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row className='mb-3'>
                                                <Col>
                                                    <Form.Group>
                                                        <Form.Control
                                                            placeholder='Message'
                                                            as="textarea"
                                                            className='bg-dark text-white'
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row className='mb-2'>
                                                <Col>
                                                    <Button type='submit'>Send Message</Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
                    </Card.Body>
                </Card>
            </div>
        </section>
    )
}

export default Skills