import React from 'react'
import Card from './Card'

const Project = () => {
    return (
        <div>
            <section className="project-section" id="project">
                <div className="container p-5">
                    <div className="border-bottom border-warning border-5">
                        <h1 className="text-center">My Projects</h1>
                    </div>
                    <div className="row mt-4">
                        <Card img='https://source.unsplash.com/29JBoNy1rhE' project='Counter App' />
                        <Card img='https://source.unsplash.com/t_7NDCsxKFI' project='Tic-Tac-toe' />
                        <Card img='https://source.unsplash.com/cLTHKmQS0zI' project='Crud Operation' />
                    </div>
                    <div className="row mt-4">
                        <Card img='https://source.unsplash.com/KDBWMSq9wh0' project='Tours' />
                        <Card img='https://source.unsplash.com/Jqa53u4Q2g4' project='Grocery Bud' />
                        <Card img='https://source.unsplash.com/W87RB3CmL3o' project='Shopping Cart' />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Project