import styles from './number.module.css'

function Number() {

    const handleChange = (e) => {

    }

    return (
        <>
            <label>Duracion: </label>
            <input type="number" name='duration' value={0}
                min={1} max={99} required onChange={handleChange} />
        </>
    )
}

export default Number