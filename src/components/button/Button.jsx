import React from "react";
import styles from './Button.module.css';

function Button({ label, severity, onClick }) {
    if (!severity) severity = ''

    return (
        <button className={`${styles.button} ${severity ? styles[severity] : ''}`} onClick={onClick}>
            {label}
        </button>
    )
}

export default Button;