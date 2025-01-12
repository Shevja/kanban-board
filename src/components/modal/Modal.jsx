import React from "react";
import styles from './Modal.module.css'

function Modal({ isOpen, bodyWidth }) {
    if (!isOpen) return null

    return (
        <div className={styles.modal}>
            <div className={styles.modal__body} style={{ width: bodyWidth }}>

            </div>
        </div>
    )
}

export default Modal;