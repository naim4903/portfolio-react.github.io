import React from 'react'

const Card = ({ img = "", project = "" }) => {
    return (
        <>
            <div className="col-lg-4">
                <div className="card shadow-lg mb-3">
                    <img src={img} className="card-img-top" height="250px"
                        alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title">{project}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card