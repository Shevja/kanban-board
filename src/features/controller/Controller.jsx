import React from "react";
import Button from "../../components/Button/Button";
import styles from './Controller.module.css';

function Controller({ createTask }) {
    return (
        <div className={styles.controller}>
            <Button label="Создать новую колонку" />
            <Button label="Создать новую задачу" onClick={createTask} />
        </div>
    )
}

export default Controller