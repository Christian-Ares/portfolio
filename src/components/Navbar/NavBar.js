import { React } from "react";

import { Contacto } from "../Contacto/Contacto";
import { Skills } from "../Skills/Skills";
import { Proyectos } from "../Projects/Proyectos"
import { Link } from "react-scroll"

import './NavBar.css'

import "./NavBar.css";

export const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbarLinks">
            {/* <Router> */}
                <li><Link                       
                    activeClass="active"
                    to="aboutMe"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={100} >About Me</Link></li>
                <li><a href={<Skills />}>Skills</a></li>
                <li><a href={<Proyectos />}>Projects</a></li>
                <li><Link                       
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={100} >Contact</Link></li>
            {/* </Router>     */}
            </ul>
        </nav>
    )
};
