import { Button } from '@material-ui/core'
import React from 'react'
// import { Redirect } from 'react-router-dom'

export const Proyecto1 = () => {

    function ProjectDemo() {
        // <Redirect to="https://christian-ares.github.io/The-Legend-of-Ironhacker/" />
        console.log('Boton Clicado')
        }

    function ProjectCode() {
        // <Redirect to="https://github.com/Christian-Ares/The-Legend-of-Ironhacker" />
        console.log('Boton Clicado')
        }

    return (
        <div>
           <Button onClick={ProjectDemo} variant="contained" color="primary">Demo</Button>
           <Button onClick={ProjectCode} variant="contained" color="primary">Source Code</Button>
        </div>
    )
}
