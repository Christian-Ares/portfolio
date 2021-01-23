import { React } from "react";
import { AboutMe } from "../AboutMe/AboutMe";
import { Contacto } from "../Contacto/Contacto";
import { Proyecto1 } from "../Projects/proyecto1/Proyecto1";
import { Proyecto2 } from "../Projects/proyecto2/Proyecto2";
import { Proyecto3 } from "../Projects/proyecto3/Proyecto3";

import "./NavBar.css";

export const NavBar = () => {
    return (
        <div>
            <ul>
                <li> <AboutMe /> </li>
                <li> <Proyecto1 /> </li>
                <li> <Proyecto2 /> </li>
                <li> <Proyecto3 /> </li>
                <li> <Contacto /> </li>
            </ul>
        </div>
    )
};
