import React, { useEffect, useState } from 'react';
import Modal from '../../components/Modal/Modal'
import styles from './Task.module.css'
import { getFormattedDate } from '../../utils/dateUtils';
import Button from '../../components/Button/Button';

function TaskModal({ isOpen, onCloseModal, task, onChangeTaskPriority }) {
    if (!isOpen) return null

    const formattedDeadline = getFormattedDate(task.deadline)
    let footerStyles = `${styles['modal-meta']}`
    let priorityWord = 'Обычный'

    switch (task.priority) {
        case 'high':
            priorityWord = 'Высокий'
            footerStyles += ` ${styles.high}`
            break;
        case 'low':
            priorityWord = 'Низкий'
            footerStyles += ` ${styles.low}`
            break;
        default:
            break;
    }

    return (
        <Modal isOpen={isOpen} onClose={onCloseModal} bodyWidth={'50%'}>
            <div>
                <div className={styles['modal-content']}>
                    <div className={styles['modal-content__title']}>
                        {task.title}
                    </div>
                    <p className={styles['modal-content__text']}>
                        {task.body ? task.body : 'Нет текста'}
                    </p>
                    <div className={styles['modal-content__deadline']}>
                        Выполнить до: {formattedDeadline}
                    </div>
                </div>

                <div className={footerStyles}>
                    <div className={styles['modal-meta__left']}>
                        <span>id: {task.id}</span>
                    </div>
                    <div className={styles['modal-meta__right']}>
                        <Button label={priorityWord + ' приоритет'} className={styles['modal-meta__button']}
                            onClick={() => onChangeTaskPriority(task.status, task._relative_key)} />
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default TaskModal;