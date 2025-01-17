import styles from './Input.module.css';

function Input({ label, className, inputClass, inputId, type, name, placeholder, onBlur, onClick, onChange }) {
    const input = {
        inputClass: `${styles.input} + ${inputClass}`,
        inputId: inputId ? inputId : null,
        type: type ? type : 'text',
        name: name ? name : '',
        placeholder: placeholder,
    }

    console.log(input)

    return (
        <div className={className}>
            <label className={styles.input__label}>

                <span>{label}</span>
                
                {input.type === 'textarea' ? (
                    <textarea
                        className={input.inputClass}
                        id={input.inputId}
                        type={input.type}
                        name={input.name}
                        placeholder={input.placeholder}

                        onBlur={onBlur}
                        onClick={onClick}
                        onChange={onChange}
                    />
                ) : (
                    <input
                        className={input.inputClass}
                        id={input.inputId}
                        type={input.type}
                        name={input.name}
                        placeholder={input.placeholder}

                        onBlur={onBlur}
                        onClick={onClick}
                        onChange={onChange}
                    />
                )}
            </label>
        </div>
    )
}

export default Input;