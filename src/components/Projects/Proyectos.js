import React from 'react';
import { Proyecto1 } from './Proyecto1/Proyecto1';
import { Proyecto2 } from './Proyecto2/Proyecto2';
import { Proyecto3 } from './Proyecto3/Proyecto3';

import './Proyectos.css'

export const Proyectos = () => {
    return (
        <div className="projects">
        <h2>Projects</h2>
            <Proyecto1 />
            <Proyecto2 />
            <Proyecto3 />
        </div>
    )
}
