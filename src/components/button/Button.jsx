import React from "react";
import styles from './Button.module.css';

function Button({ label, severity, onClick }) {
    return (
        <button className={`${styles.button} ${styles[severity]}`} onClick={onClick}>
            {label}
        </button>
    )
}

export default Button;