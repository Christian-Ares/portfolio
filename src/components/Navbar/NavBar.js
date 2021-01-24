import { React } from "react";
import { Link, Router } from "react-router-dom";
import { AboutMe } from "../AboutMe/AboutMe";
import { Contacto } from "../Contacto/Contacto";
import { Proyecto1 } from "../Projects/Proyecto1/Proyecto1";
import { Proyecto2 } from "../Projects/Proyecto2/Proyecto2";
import { Proyecto3 } from "../Projects/Proyecto3/Proyecto3";

import "./NavBar.css";

export const NavBar = () => {
    return (
        <div>
            <ul>
            {/* <Router> */}
                <li><a href=""><AboutMe /></a></li>
                <li> <Proyecto1 /> </li>
                <li> <Proyecto2 /> </li>
                <li> <Proyecto3 /> </li>
                <li> <Contacto /> </li>
            {/* </Router>     */}
            </ul>
        </div>
    )
};
