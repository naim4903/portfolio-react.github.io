import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movieDetails }) => {
    const navigate = useNavigate();

    const onButtonClick = () => {
        navigate(`movies/movie-details/${movieDetails.imdbID}`)
    }
    return (
        <>
            {movieDetails ?
                <Card className='movie-card bg-dark text-white' style={{ maxWidth: "90%", height: "100%" }} onClick={onButtonClick}>
                    <Card.Img src={movieDetails.Poster} alt="not avalable" style={{ maxWidth: "100%", height: "280px" }} />
                    <Card.Body>{movieDetails.Title} ({movieDetails.Year})</Card.Body>
                </Card>
                :
                null
            }
        </>
    )
}

export default MovieCard