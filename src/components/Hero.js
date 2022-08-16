import React from 'react'
import img from "../naim.jpg"

const Hero = () => {
    return (
        <div>
            <section className="hero-section pt-5">
                <div className="container py-5">
                    <div className="row p-4 pb-0 pe-lg-0 pt-lg-0 align-items-center rounded-3 border shadow-lg">
                        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                            <h1 className="display-4 fw-bold lh-1">Hello<br /> I'm <span className="text-primary"> Naim Tarafder</span>
                            </h1>
                            <p className="lead display-6 fw-normal">I am a React developer.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Projects</button>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                            <img className="rounded-lg-3 img-fluid" src={img} alt="" width="" height="" />
                        </div>
                    </div>
                </div>
            </section>
            <div className="b-example-divider"></div>

        </div>
    )
}

export default Hero