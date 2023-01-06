import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as solidFaStar } from '@fortawesome/free-solid-svg-icons'

import styles from './addactivity.module.css'
import { createActivity, resetError } from '../../redux/actions'
import { Search, FormError } from '../../components/index'
import { seasonsOptions } from '../../utils/options'

export default function AddActivity() {
    // === Local state ===
    const formInitialState = { name: '', dificulty: 1, duration: 1, season: '' }
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
    const err = useSelector(state => state.error)

    // === Handlers ===
    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        setFormValues(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(resetError())
        dispatch(createActivity({
            ...formValues,
            countriesIds
        }))
        setFormValues({ ...formInitialState })
        setCountriesIds([])
    }

    return (
        <>
            {err ? <FormError text={err.code} /> : ""}
            <div className={styles.activities}>
                <form className={styles.activityform} onSubmit={handleSubmit}>

                    {/* === Name input === */}
                    <label htmlFor="name">Activity name</label>
                    <input type="text" name="name"
                        onChange={handleChange} autoComplete={'off'} value={formValues.name} />

                    {/* === Duration input === */}
                    <label htmlFor="duration">Duration</label>
                    <input type="number" name='duration' value={formValues.duration}
                        onChange={handleChange} />

                    {/* === Dificulty input === */}
                    <label htmlFor="dificulty">Dificulty</label>
                    <div className={styles.dificultyinput}>
                        {Array(5).fill().map((v, i) => 1 + i).map((item, index) => (
                            <button key={`dificulty-button-${index}`} type='button'
                                onClick={() => setFormValues({
                                    ...formValues,
                                    dificulty: item
                                })} className={styles.starbtn}>
                                <FontAwesomeIcon icon={formValues.dificulty > index ? solidFaStar : faStar} 
                                fixedWidth size='sm' stroke='full' style={{ color: 'yellow' }} />
                            </button>
                        ))}
                    </div>

                    {/* === Season input === */}
                    <label htmlFor="">Season</label>
                    <select name='season' value={formValues.season}
                        onChange={handleChange} className={styles.seasoninput}>
                        {seasonsOptions.map((season, index) => (
                            <option value={season}
                                key={`season-option-${index}`}
                            >{season}</option>
                        ))}
                    </select>

                    <button type="submit" disabled={isDisabled}
                        className={styles.submitbtn}
                    >Crear</button>
                </form>

                {/* === Search country === */}
                <div className="">
                    <Search countriesIds={countriesIds} setCountriesIds={setCountriesIds}/>
                </div>
            </div>
        </>
    )
}