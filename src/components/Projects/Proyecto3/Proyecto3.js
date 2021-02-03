import { Button } from '@material-ui/core'
import React from 'react'
import Tilty from 'react-tilty'

export const Proyecto3 = () => {

    return (
        <div>
            <Tilty style={{width:639, heigth:397}} reset={true}>
                <img src="/images/Mi-Primer-Paso.png" alt="Mi Primer Paso" />
            </Tilty>
            <div></div>
            <Button variant="contained" color="primary" href="https://escuela-infantil.netlify.app/">Demo</Button>
            <Button variant="contained" color="primary" href="https://github.com/Christian-Ares/final_react">Source Code</Button>
            
        </div>
    )
}
