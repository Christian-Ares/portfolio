import { Button } from '@material-ui/core'
import React from 'react'
import Tilty from 'react-tilty'


export const Proyecto1 = () => {

    return (
        <div className="project">
            <div>
                <Tilty style={{width:639, heigth:397}} reset={true}>
                    <img src="/images/The-Legend-of-Ironhacker.jpg" alt="The Legend of Ironhacker" />
                </Tilty>
            </div>

        <br/>

            <div className="buttons">
                <p><strong>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
                </strong></p>
                    <br/>
                <Button variant="contained" color="primary" href="https://christian-ares.github.io/The-Legend-of-Ironhacker/">Demo</Button>
                <Button variant="contained" color="primary" href="https://github.com/Christian-Ares/The-Legend-of-Ironhacker">Source Code</Button>
            </div>
        </div>
    )
};