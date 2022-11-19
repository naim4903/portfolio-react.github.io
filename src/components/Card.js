import React from 'react'
import { useNavigate } from 'react-router-dom';

const MyCard = ({ img = "", project = "", link = "", href = "#" }) => {

    const navigate = useNavigate();

    return (
        <>
            <div className="col-lg-4">
                <div className="card shadow-lg mb-3 border-dark bg-dark text-white" style={{ cursor: "pointer" }} onClick={() => navigate(`/${link}`)}>
                    <img src={img} className="card-img-top" height="250px"
                        alt="..." />
                    <div className="card-body text-center">
                        <a href={href} style={{
                            textDecoration: "none",
                            color: "white"
                        }} target={href !== "#" ? "_blank" : null}>
                            <h5 className="card-title">{project}</h5>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyCard;