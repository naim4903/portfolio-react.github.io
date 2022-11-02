import React from 'react'
import { Card } from "react-bootstrap"

const About = () => {
    return (
        <div>
            <section className="about-section pt-5" id="about">
                <div className="container py-5">
                    <Card className='shadow-sm'>
                        <Card.Body className='p-4'>
                            <h2 className="text-muted">About me</h2>
                            <p className="lead fs-4 fw-normal">Hi! I'm Naim Tarafder. An experienced ReactJs developer. <br /> I have 6
                                month
                                experience working with react,redux,expressJs,NodeJs.
                                I'm also familiar with NextJs,Bootsrap,git,Github,Jquery.
                            </p>

                        </Card.Body>
                    </Card>
                </div>
            </section>

            {/* <div className="b-example-divider"></div> */}
        </div>
    )
}

export default About