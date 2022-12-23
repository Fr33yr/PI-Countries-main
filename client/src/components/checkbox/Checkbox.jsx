import styles from './checkbox.module.css'


function Checkbox({ selectedSeason, setSelectedSeason }) {

    const handleChecks = (e) => {
        const { value, checked } = e.target
        const { seasons } = selectedSeason

        if (checked) {
            setSelectedSeason({
                seasons: [...seasons, value],
            })
        } else {
            setSelectedSeason({
                seasons: seasons.filter((e) => e !== value)
            })
        }
    }

    return (
        <>
            <label>Temporada: </label>
            <fieldset onChange={handleChecks} className={styles.checkbox}>
                <label htmlFor="fall">fall</label>
                <input type="checkbox" name="season" value={'fall'} />
                <label htmlFor="winter">winter</label>
                <input type="checkbox" name="season" value={'winter'} />
                <label htmlFor="spring">spring</label>
                <input type="checkbox" name="season" value={'spring'} />
                <label htmlFor="summer">summer</label>
                <input type="checkbox" name="season" value={'summer'} />
            </fieldset>
        </>
    )
}

export default Checkbox