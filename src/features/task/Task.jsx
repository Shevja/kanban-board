import React from "react";
import { getFormattedDate } from "../../utils/dateUtils";
import styles from './Task.module.css';

function Task({ title, body, priority, createdAt, deadline, onRemove }) {
    // let formattedCreatedAt = getFormattedDate(createdAt)
    let formattedDeadline = getFormattedDate(deadline)

    let wrapperStyle = `${styles.wrapper}`

    switch (priority) {
        case 'high':
            wrapperStyle += ` ${styles.wrapper_high}`
            break;
        case 'low':
            wrapperStyle += ` ${styles.wrapper_low}`
            break;
        default:
            break;
    }

    return (
        <div className={wrapperStyle}>
            <div className={styles.header}>
                <span>{title}</span>
                <button onClick={onRemove}>&times;</button>
            </div>
            <div className={styles.body}>
                <p className={styles.text}>
                    {body}
                </p>
            </div>
            <div className={`${styles.footer} ${deadline}`}>
                <div>
                    <span>Выполнить до:</span> <span>{formattedDeadline}</span>
                </div>
                {/* <div>
                    <span>Дата создания:</span> <span>{formattedCreatedAt}</span>
                </div> */}
            </div>
        </div>
    )
}

export default Task;