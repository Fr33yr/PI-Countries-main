import styles from './dificulty.module.css'

function Dificulty({ dificulty, setDificulty }) {

    const handleChange = (e) => {
        setDificulty(e.target.value)
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

export default Dificulty