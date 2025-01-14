import React, { useState } from "react";
import Column from "../column/Column";
import styles from './Board.module.css'
import { DragDropContext } from "@hello-pangea/dnd";

function Board({ taskInfo, onDragEnd, onRemoveTask, onOpenTask }) {
    const [columns, setColumns] = useState({
        toDo: 'К выполнению',
        inProgress: 'Выполняется',
        done: 'Выполнено'
    })

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className={styles.board}>
                {
                    Object.keys(taskInfo).map((key, idx) => (
                        <Column
                            key={idx}
                            id={idx}
                            title={columns[key]}
                            columnKey={key}
                            taskList={taskInfo[key]}
                            onRemoveCard={onRemoveTask}
                            onOpenTask={onOpenTask}
                        />
                    ))
                }
            </div>
        </DragDropContext>
    )
}

export default Board;