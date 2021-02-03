import { Button } from '@material-ui/core'
import React from 'react'
import Tilty from 'react-tilty'


export const Proyecto1 = () => {

    return (
        <div className="botones1">
                                    {/* Probar a ponerle un padding a la imagen para dejarla a la izquierda, hacer con todas las imagenes */}
            {/* <div className="tilty-img"> */}
                <Tilty style={{width:639, heigth:397}} reset={true}>
                    <img src="/images/The-Legend-of-Ironhacker.jpg" alt="The Legend of Ironhacker" />
                </Tilty>
            {/* </div>     */}
            <div></div>
           <Button variant="contained" color="primary" href="https://christian-ares.github.io/The-Legend-of-Ironhacker/">Demo</Button>
           <Button variant="contained" color="primary" href="https://github.com/Christian-Ares/The-Legend-of-Ironhacker">Source Code</Button>
        </div>
    )
};