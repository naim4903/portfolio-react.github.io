import React from 'react'
import MyCard from './Card'
import { Card } from 'react-bootstrap'

const Project = () => {

    return (
        <div>
            <section className="project-section" id="project">
                <div className="container p-5">
                    <div className="">
                        <Card className='pt-2 border-0 bg-success bg-opacity-25'>
                            <Card.Text>
                                <h4 className="text-center fw-bold">My Projects</h4>
                            </Card.Text>
                        </Card>
                    </div>
                    <div className="row mt-4">
                        <MyCard img='/images/todo.png' project='Todo App' link="todo" />
                        <MyCard img='/images/theme-toggler.png' project='Theme Toggler' />
                        <MyCard img='/images/Tic-Tac-Toe.png' project='Tic Tac Toe' />
                    </div>
                    <div className="row mt-4">
                        <MyCard img='images/random user.png' project='Random User' />
                        <MyCard img='https://source.unsplash.com/Jqa53u4Q2g4' project='Grocery Bud' />
                        <MyCard img='https://source.unsplash.com/W87RB3CmL3o' project='Shopping Cart' />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Project