// import { Redirect } from "react-router-dom";
import { Button } from '@material-ui/core'
import React from 'react'

export const Proyecto1 = () => {

    const handleClick = (e) => {
        e.preventDefault();
        console.log('Botton clicado')
    }

    return (
        <div>
           {/* <button><a href="https://christian-ares.github.io/The-Legend-of-Ironhacker/" ></a>Demo</button> */}
           {/* <button><a href="https://github.com/Christian-Ares/The-Legend-of-Ironhacker" ></a>Source Code</button> */}
           <Button onClick={(()=> handleClick())} variant="contained" color="primary"></Button>
        </div>
    )
}
