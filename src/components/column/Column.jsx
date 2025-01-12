import React, { useEffect } from "react";
import styles from './Column.module.css';
import Task from "../task/Task";

function Column({ title, taskList, columnForStatus }) {

    return (
        <div className={styles.column}>
            <div className={styles.column__title}>
                {title}
            </div>
            <ul className={styles.column__items}>
                {
                    taskList.map(task => (
                        <li key={task.id}>
                            <Task
                                title={task.title}
                                body={task.body}
                                priority={task.priority}
                                createdAt={task.createdAt}
                                deadline={task.deadline}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Column;