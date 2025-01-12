import React from "react";
import styles from './Column.module.css';
import Task from "../task/Task";
import { Draggable, Droppable } from "@hello-pangea/dnd";

function Column({ id, title, columnKey, taskList, onRemoveCard }) {

    return (
        <Droppable key={id} droppableId={columnKey}>
            {(provided) => (
                <div className={styles.column}>
                    <div className={styles.column__title}>
                        {title}
                    </div>
                    <div
                        className={styles.column__items}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {
                            taskList.map((task, index) => (
                                <Draggable key={task.id} draggableId={`${task.id}`} index={index}>
                                    {(provided) => (
                                        <div
                                            key={task.id}
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <Task
                                                title={task.title}
                                                body={task.body}
                                                priority={task.priority}
                                                createdAt={task.createdAt}
                                                deadline={task.deadline}
                                                onRemove={() => onRemoveCard(columnKey, index)}
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            ))
                        }
                    </div>
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}

export default Column;