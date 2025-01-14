import React, { useEffect } from 'react';
import Modal from '../../components/Modal/Modal'

function TaskModal({ isOpen, onCloseModal, task }) {
    if (!isOpen) return null

    // useEffect(() => { // в этом useEffect проблема
    //     console.log('task: ' + task)
    // }, [task])

    return (
        <Modal isOpen={isOpen} onClose={onCloseModal} bodyWidth={'50%'}>
            <div>
                <span>
                    {task.title}
                </span>
            </div>
        </Modal>
    )
}

export default TaskModal;