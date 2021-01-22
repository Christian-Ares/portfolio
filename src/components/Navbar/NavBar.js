import { React } from "react";
import { AboutMe } from "../AboutMe/AboutMe";
import { Contacto } from "../Contacto/Contacto";

import "./NavBar.css";

export const NavBar = () => {
    return (
        <div>
            <ul>
                <li> <AboutMe /> </li>
                <li> Proyectos </li>
                <li> <Contacto /> </li>
            </ul>
        </div>
    )
};
