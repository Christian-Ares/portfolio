import React from 'react'
import Tilty from 'react-tilty'

export const Proyecto1 = () => {

    return (
        <div className="project">
            <div className="tilty-container">
                {/* <Tilty style={{width:639, heigth:397}} reset={true}> */}
                <Tilty>
                    <img src="/images/The-Legend-of-Ironhacker.jpg" alt="The Legend of Ironhacker" />
                </Tilty>
            </div>

        <br/>

            <div className="buttons">
                <h3>The Legend Of Ironhacker!</h3>
                <br/>
                <p><strong>
                First project coded in the Web Developer bootcamp, which consists of creating a game using JavaScript, HTML and CSS.
                </strong></p>
                    <br/>
                    <div className="links">
                        <a href="https://christian-ares.github.io/The-Legend-of-Ironhacker/" className="projectLink"><span>Demo</span></a>
                        <a href="https://github.com/Christian-Ares/The-Legend-of-Ironhacker" className="projectLink"><span>Source Code</span></a>
                    </div>
            </div>
        </div>
    )
};