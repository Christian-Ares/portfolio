import { Button } from '@material-ui/core'
import React from 'react'
import Tilty from "react-tilty";

export const Proyecto2 = () => {

    return (
        <div>
            <Tilty style={{width:639, heigth:397}} reset={true}>
                <img src="/images/MascotApp.png" alt="MascotApp" />
            </Tilty>
            <div></div>
            <Button variant="contained" color="primary" href="https://mascotapp-v1.herokuapp.com/">Demo</Button>
            <Button variant="contained" color="primary" href="https://github.com/Christian-Ares/MascotApp">Source Code</Button>
        </div>
    )
}
