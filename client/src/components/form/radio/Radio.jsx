import styles from './radio.module.css'

function Radio({ setForm }) {

    const handleChange = (e) => {
        const value = e.target.value
        setForm(values => ({ ...values, dificulty: value }))
    }


    return (
        <>
            <fieldset onChange={handleChange} className={styles.dificulty}>
                <legend>Dificultad</legend>
                <label htmlFor="dificulty">muy facil</label>
                <input type="radio" name="dificulty" value={'muy facil'} />
                <label htmlFor="dificulty">facil</label>
                <input type="radio" name="dificulty" value={'facil'} />
                <label htmlFor="dificulty">normal</label>
                <input type="radio" name="dificulty" value={'normal'} />
                <label htmlFor="dificulty">dificil</label>
                <input type="radio" name="dificulty" value={'dificil'} />
                <label htmlFor="dificulty">muy dificil</label>
                <input type="radio" name="dificulty" value={'muy dificil'} />
            </fieldset>
        </>
    )
}

export default Radio