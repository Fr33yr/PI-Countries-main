import styles from './number.module.css'

function Number({form, setForm}) {

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm(values => ({ ...values, [name]: value }))
    }

    return (
        <>
            <label>Duracion: </label>
            <input type="number" name='duration' value={form.duration}
                min={1} max={99} required onChange={handleChange} />
        </>
    )
}

export default Number