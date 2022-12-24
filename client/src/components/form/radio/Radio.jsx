import styles from './radio.module.css'

function Radio({ form, setForm }) {

    const handleChange = (e) => {
        const value = e.target.value
        setForm(values => ({...values, dificulty: value}))
    }

    return (
        <>
            <fieldset onChange={handleChange} className={styles.dificulty}>
                <legend>Dificultad</legend>
                <label htmlFor="dificulty">muy facil</label>
                <input type="radio" name="dificulty" value={1} />
                <label htmlFor="dificulty">facil</label>
                <input type="radio" name="dificulty" value={2} />
                <label htmlFor="dificulty">normal</label>
                <input type="radio" name="dificulty" value={3} />
                <label htmlFor="dificulty">dificil</label>
                <input type="radio" name="dificulty" value={4} />
                <label htmlFor="dificulty">muy dificil</label>
                <input type="radio" name="dificulty" value={5} />
            </fieldset>
        </>
    )
}

export default Radio