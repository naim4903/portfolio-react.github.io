import React from 'react'
import { Card, ProgressBar } from 'react-bootstrap'

const Skills = () => {
    return (
        <section className="about-section pt-5" id="about">
            <div className="container py-5">
                <Card className='shadow-sm'>
                    <Card.Body className='p-4'>
                        <div className='mb-3'>
                            <p className='m-0'>HTML/CSS</p>
                            <ProgressBar now={90} label={`${80}%`} variant=""
                                style={{
                                    height: "2rem",
                                    width: "70%",
                                    borderRadius: "1rem",
                                    fontSize: ".9rem"
                                }} />
                        </div>
                        <div className='mb-3'>
                            <p className='m-0'>Javascript</p>
                            <ProgressBar now={90} label={`${80}%`} variant="" style={{
                                height: "2rem",
                                width: "70%",
                                borderRadius: "1rem",

                            }} />
                        </div>
                        <div className='mb-3'>
                            <p className='m-0'>React</p>
                            <ProgressBar now={90} label={`${80}%`} variant="" style={{
                                height: "2rem",
                                width: "70%",
                                borderRadius: "1rem",

                            }} />
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </section>
    )
}

export default Skills