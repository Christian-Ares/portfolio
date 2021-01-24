import { Button } from '@material-ui/core'
import React from 'react'

export const Proyecto3 = () => {

    function ProjectDemo() {
        // <Redirect to="https://escuela-infantil.netlify.app/" />
        console.log('Boton Clicado')
        }

    function ProjectCode() {
        // <Redirect to="https://github.com/Christian-Ares/final_react" />
        console.log('Boton Clicado')
        }

    return (
        <div>
            <Button onClick={ProjectDemo} variant="contained" color="primary">Demo</Button>
            <Button onClick={ProjectCode} variant="contained" color="primary">Source Code</Button>
            
        </div>
    )
}
