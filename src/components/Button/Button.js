import React from 'react'
import { AwesomeButton } from "react-awesome-button";
// import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";
import styles from "react-awesome-button/src/styles/themes/theme-rickiest"

// Necesario Node-Sass version 4.14.1 para que funcione

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
