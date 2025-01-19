import React from "react";
import styles from './Radio.module.css'

function Radio({ inputId, name, isChecked, label, insideLabel }) {


    return (
        <div className={styles.radio}>
            <label>
                <input type="radio" name="t" />
                <div className={`${styles.radio__button} ${insideLabel ? styles.radio__button_inside : null}`}>
                    {insideLabel ? <span>{insideLabel}</span> : null}
                </div>

                {label ? (
                    <div>
                        {label}
                    </div>
                ) : null
                }
            </label>
        </div>
    )
}

export default Radio;