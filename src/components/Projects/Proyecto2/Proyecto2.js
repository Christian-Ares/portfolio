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
                    <p><strong>
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
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
