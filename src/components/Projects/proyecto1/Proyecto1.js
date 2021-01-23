// import { Redirect } from "react-router-dom";
import { Button } from '@material-ui/core'
import React from 'react'

export const Proyecto1 = () => {

   const handleClick = (e) => {
        e.preventDefault();
        console.log('Botton clicado');
    };

    return (
        <div>
           <button onClick={()=> this.handleClick} >Demo</button>
           {/* <button><a href="https://github.com/Christian-Ares/The-Legend-of-Ironhacker" ></a>Source Code</button> */}
           <Button onClick={()=> this.handleClick} variant="contained" color="primary">Demo</Button>
        </div>
    )
}
