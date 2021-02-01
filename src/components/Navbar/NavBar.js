import { React } from "react";
import { AboutMe } from "../AboutMe/AboutMe";
import { Contacto } from "../Contacto/Contacto";
import { Skills } from "../Skills/Skills";
import { Proyectos } from "../Projects/Proyectos"

import './NavBar.css'

import "./NavBar.css";

export const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbarLinks">
            {/* <Router> */}
                <li><a href={<AboutMe />}>About Me</a></li>
                <li><a href={<Skills />}>Skills</a></li>
                <li><a href={<Proyectos />}>Projects</a></li>
                <li><a href={<Contacto />}>Contact</a></li>
            {/* </Router>     */}
            </ul>
        </nav>
    )
};
