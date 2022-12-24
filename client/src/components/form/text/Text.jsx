import styles from './text.module.css'

function Text({form, setForm}) {

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm(values => ({ ...values, [name]: value }))
    }

    return (
        <>
            <label>Nombre: </label>
            <input type="text" name='name' value={form.name}
                required onChange={handleChange} autoComplete='off' />
        </>
    )
}

export default Text