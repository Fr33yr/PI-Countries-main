import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as solidFaStar } from '@fortawesome/free-solid-svg-icons'

import styles from './activity.module.css'
import { createActivity } from '../../redux/actions'
import { Search, FormError } from '../../components/index'
import { seasonsOptions } from '../../utils/options'

export default function Activity() {
    // === Local state ===
    const formInitialState = { name: '', dificulty: 0, duration: 1, season: '' }
    const [formValues, setFormValues] = useState({ ...formInitialState })
    const [countriesIds, setCountriesIds] = useState([])
    const [isDisabled, setIsDisabled] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        if (formValues.name === '' || formValues.duration === 0 || formValues.season === '') {
            setIsDisabled(true)
        } else {
            setIsDisabled(false)
        }
    }, [formValues])

    // === Selectors ===
    const actErr = useSelector(state => state.activity)

    // === Handlers ===
    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        setFormValues(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createActivity({
            ...formValues,
            countriesIds: countriesIds
        }))
        setFormValues({ ...formInitialState })
        setCountriesIds([])
    }

    return (
        <>
            {actErr.message ? <FormError text={actErr.message} /> : ""}
            <div className={styles.activities}>
                <form className={styles.activityform} onSubmit={handleSubmit}>

                    {/* === Name input === */}
                    <label htmlFor="name">Nombre </label>
                    <input type="text" name="name"
                        onChange={handleChange} autoComplete={'off'} value={formValues.name} />

                    {/* === Duration input === */}
                    <label htmlFor="duration">Duracion </label>
                    <input type="number" name='duration' value={formValues.duration}
                        onChange={handleChange} />

                    {/* === Dificulty input === */}
                    <label htmlFor="dificulty">Dificultad</label>
                    <div className={styles.dificultyinput}>
                        {Array(5).fill().map((v, i) => 1 + i).map((item, index) => (
                            <button key={`dificulty-button-${index}`} type='button'
                                onClick={() => setFormValues({
                                    ...formValues,
                                    dificulty: item
                                })} className={styles.starbtn}>
                                <FontAwesomeIcon icon={solidFaStar} fixedWidth size='sm' stroke='full' style={{ color: 'yellow' }} />
                            </button>
                        ))}
                    </div>

                    {/* === Season input === */}
                    <label htmlFor="">Temporada</label>
                    <select name='season' value={formValues.season}
                        onChange={handleChange} className={styles.seasoninput}>
                        {seasonsOptions.map((season, index) => (
                            <option value={season}
                                key={`season-option-${index}`}
                            >{season}</option>
                        ))}
                    </select>

                    <button type="submit" disabled={isDisabled}
                        className={styles.submitbtn}>Crear</button>
                </form>
                <Search countriesIds={countriesIds}
                    setCountriesIds={setCountriesIds}
                    setIsDisabled={setIsDisabled} />
            </div>
        </>
    )
}