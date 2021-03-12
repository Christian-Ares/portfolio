import React from 'react'
import Tilty from 'react-tilty'

export const Proyecto3 = () => {

    return (
        <div className="project">
            <div className="tilty-container">
                <Tilty reset={true}>
                    <img src="/images/Mi-Primer-Paso.png" alt="Mi Primer Paso" />
                </Tilty>
            </div>
            <br/>
                <div className="buttons">
                <h3>Mi Primer Paso</h3>
                <br/>
                    <p><strong>
                    This project is the beginning of a dream to own a children's school.
                    It's an SPA used to recreate a page for a children's school.
                    <br/>
                    Technologies: ReactJS, MongoDB, NodeJS and deployes in Netlify.
                    </strong></p>
                <br/>
                <div className="links">
                    <a href="https://escuela-infantil.netlify.app/" className="projectLink"><span>Demo</span></a>
                    <a href="https://github.com/Christian-Ares/final_react" className="projectLink"><span>Source Code</span></a>
                </div>
            </div>
        </div>
    )
};