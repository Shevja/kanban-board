import React from "react";
import { getFormattedDate } from "../../utils/dateUtils";
import styles from './Task.module.css';


function Task({ title, body, priority, createdAt, deadline }) {
    let formattedCreatedAt = getFormattedDate(createdAt)
    let formattedDeadline = getFormattedDate(deadline)

    let priorityWord = null
    let wrapperStyle = `${styles.wrapper}`

    switch (priority) {
        case 'high':
            wrapperStyle += ` ${styles.wrapper_high}`
            priorityWord = 'Высокий'
            break;
        case 'low':
            wrapperStyle += ` ${styles.wrapper_low}`
            priorityWord = 'Низкий'
            break;
        default:
            priorityWord = 'Обычный'
            break;
    }

    return (
        <div className={wrapperStyle}>
            <div className={styles.header}>
                {/* {priorityWord} */}
                {title}
            </div>
            <div className={styles.body}>
                {/* <div className={styles.title}>
                    {title}
                </div> */}
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