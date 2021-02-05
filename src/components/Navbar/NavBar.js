import { React } from "react";
import { Link } from "react-scroll"

import "./NavBar.css";

export const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbarLinks">

                <li><Link                       
                    activeClass="active"
                    to="aboutMe"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={1000} >About Me
                    </Link></li>

                <li><Link                       
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={1000} >Skills
                    </Link></li>

                <li><Link                       
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={1000} >Projects
                    </Link></li>

                <li><Link                       
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000} >Contact</Link></li>
            </ul>
        </nav>
    )
};
