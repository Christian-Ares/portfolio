import React from 'react'
import Tilty from "react-tilty";

export const Proyecto2 = () => {

    return (
        <div className="project">
            <div>
                <Tilty style={{width:639, heigth:397}} reset={true}>
                    <img src="/images/MascotApp.png" alt="MascotApp" />
                </Tilty>
            </div> 

        <br/>   

            <div className="buttons">
                    <h3>MascotApp</h3>
                    <br/>
                    <p><strong>
                    MascotApp is an app made for the storage of all the data relationated with your pet, you can create an user, add your pets an also adopt another little friend.
                    <br/>
                    Technologies: HBS, ExpressJS, MongoDB and NodeJS.
                    </strong></p>
                        <br/>
                    <div className="links">
                        <a href="https://mascotapp-v1.herokuapp.com/" className="projectLink"><span>Demo</span></a>
                        <a href="https://github.com/Christian-Ares/MascotApp" className="projectLink"><span>Source Code</span></a>
                    </div>
            </div>
        </div>
    )
}
