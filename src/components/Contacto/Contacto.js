import React from 'react'
import './Contacto.css'


export const Contacto = () => {
    return (
        <div className="contact" id="contact">
            <div className="footer">
                <h1>Contact me</h1>
                    <div className="logos">
                        <a href="mailto:christianaresvillan@gmail.com"><img src="/images/gmail_logo.png" alt="Gmail Logo" className="logo"></img></a>
                        <a href="https://github.com/Christian-Ares"><img src="/images/GitHub-Mark-64px.png" alt="Github Logo" className="logo"></img></a>
                        <a href="https://www.linkedin.com/in/christian-ares/"><img src="/images/LI-In-Bug.png" alt="LinkedIn Logo" className="logo"></img></a>
                    </div>
                    
                    <h5>Created by Christian Ares</h5>
            </div>        
        </div>
    )
}