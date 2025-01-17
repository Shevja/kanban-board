import Button from "../../components/Button/Button";
import Input from "../../components/input/Input";
import Modal from "../../components/Modal/Modal";
import styles from './CreateTaskModal.module.css'

function CreateTaskModal({ isOpen, onCloseModal }) {
    if (!isOpen) return

    return (
        <Modal isOpen={isOpen} onClose={onCloseModal} bodyWidth={'50%'}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    Создать новую задачу
                </div>

                <div className={styles.form}>
                    <Input label="Заголовок" placeholder='Очень крутой заголовок' />
                    <Input
                        type="textarea"
                        label="Содержимое"
                        placeholder='Очень крутой незаголовок, тело? Не, содержимое! точно, такое и будет название инпута!'
                    />
                </div>

                <div className={styles.buttons}>
                    <Button label="Отмена" severity="danger" />
                    <Button label="Создать" severity="success" />
                </div>
            </div>
        </Modal>
    )
}

export default CreateTaskModal;