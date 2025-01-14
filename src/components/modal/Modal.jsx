import React from "react";
import styles from './Modal.module.css'

function Modal({ children, isOpen, bodyWidth, onClose }) {
    if (!isOpen) return null

    return (
        <div className={styles.modal} onClick={onClose}>
            <div className={styles.modal__body} style={{ maxWidth: bodyWidth }} onClick={(e) => e.stopPropagation()}>
                <button className={styles.modal__close} onClick={onClose}>&times;</button>
                {children}
            </div>
        </div>
    )
}

export default Modal;