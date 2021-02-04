import React from 'react'
import { AwesomeButton } from "react-awesome-button";
// import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";
import styles from "react-awesome-button/src/styles/themes/theme-rickiest"

// Error de Sass, corregir version y poner la 4.0.0

const Button = () => {
    return (
        <AwesomeButton
        size="small"
        cssModule={styles} 
        type="anchor">
        </AwesomeButton>
    );
}

export default Button;
