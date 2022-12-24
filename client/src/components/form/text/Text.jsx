import styles from './text.module.css'

function Text() {
    return (
        <>
            <label>Nombre: </label>
            <input type="text" name='name' value={form.name}
                required onChange={handleChange} autoComplete='off' />
        </>
    )
}

export default Text