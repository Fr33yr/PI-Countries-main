import styles from './number.module.css'

function Number({ setForm }) {

    const handleChange = (e) => {
        const value = e.target.value
        setForm(values => ({ ...values, duration: value }))
    }

    return (
        <>
            <label>Duracion: </label>
            <input type="number" name='duration'
                min={1} max={99} required onChange={handleChange} />
        </>
    )
}

export default Number