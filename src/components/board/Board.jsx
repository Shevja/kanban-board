import React, { useEffect, useState } from "react";
import Column from "../column/Column";
import styles from './Board.module.css'

function Board() {
    const [columns, setColumns] = useState({
        toDo: 'К выполнению',
        inProgress: 'Выполняется',
        done: 'Выполнено'
    })

    const [taskList, setTaskList] = useState([
        { id: 0, title: 'Помыть кота', status: 'toDo', priority: 'high', body: 'Он стал чересчур пушится, и шерсть везде', createdAt: new Date(), deadline: new Date() },
        { id: 1, title: 'Купить покушать', status: 'toDo', priority: 'regular', body: 'Колбаса, макарена, елка, стоп, я же не ем елки', createdAt: new Date(), deadline: new Date() },
        { id: 2, title: 'Прогуляться', status: 'toDo', priority: 'low', body: 'Говорят за стенами есть бескрайнее море, которого не вычерпать ни одному купцу. Есть реки огня, есть леса, которые не вырубить, и есть в них такие места, которые даже старейшины не могут объяснить. Мир за стенами огромен, и я хочу увидеть его. Я хочу понять, что это за мир.', createdAt: new Date(), deadline: new Date() },
    ])

    return (
        <div className={styles.board}>
            {/* {columns.map((columnName, idx) => (
            ))} */}
            {
                Object.keys(columns).map((key, idx) => (
                    <Column
                        key={idx}
                        title={columns[key]}
                        taskList={taskList.filter(task => task.status === key)}
                        columnForStatus={key}
                    />
                ))
            }
        </div>
    )
}

export default Board;