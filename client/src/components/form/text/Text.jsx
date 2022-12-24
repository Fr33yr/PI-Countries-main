import styles from './text.module.css'

function Text({ setForm }) {

    const handleChange = (e) => {
        const value = e.target.value
        setForm(values => ({ ...values, name: value }))
    }

    return (
        <>
            <label>Nombre: </label>
            <input type="text" name='name'
                required onChange={handleChange} autoComplete='off' />
        </>
    )
}

export default Text