import { useState } from 'react'
import styles from './text.module.css'

function Text({ setForm }) {
    const [error, setError] = useState('')
    const handleChange = (e) => {
        const value = e.target.value
        setForm(values => ({ ...values, name: value }))
    }

    const handleError = (e) => {
        const regEx = /^[A-Za-z\s]*$/
        const value = e.target.value
        regEx.test(value) ? setError("") : setError("Solo letras en este campo")
    }

    return (
        <>
            <label>Nombre </label>
            <input type="text" name='name' onSelect={handleError}
                required onChange={handleChange} autoComplete='off'
                className={error !== ''? styles.inputtext : ""} />
        </>
    )
}

export default Text