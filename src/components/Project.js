import React from 'react'
import MyCard from './Card'
import { Card } from 'react-bootstrap'


const Project = () => {

    return (
        <div>
            <section className="project-section" id="project">
                <div className="container p-5">
                    <div className="">
                        <Card className='pt-2 border-0 bg-dark bg-opacity-100'>
                            <Card.Text>
                                <h5 className="text-center text-white fw-bold" style={{ letterSpacing: "3px" }}>My Projects</h5>
                            </Card.Text>
                        </Card>
                    </div>
                    <div className="row mt-4">
                        <MyCard img='/images/todo.png' project='Todo App' link="todo" />
                        <MyCard img='/images/movie.png' project='Movie App' href="https://movie-marshmallow.netlify.app/" />
                        <MyCard img='/images/quiz_app_next.png' project='Quiz App' href="https://naim-quiz.netlify.app/" />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Project