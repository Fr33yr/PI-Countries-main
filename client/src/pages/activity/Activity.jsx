import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './activity.module.css'
import { createActivity } from '../../redux/actions'
import {
    Search,
    FormError
} from '../../components/index'
import { seasons } from '../../utils/seasons'

export default function Activity() {
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

    //selectors
    const actErr = useSelector(state => state.activity)

    //handlers
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
                    <label htmlFor="name">Nombre: </label>
                    <input type="text" name="name"
                        onChange={handleChange} autoComplete={'off'} value={formValues.name} />
                    {/* === Duration input === */}
                    <label htmlFor="">Duracion: </label>
                    <input type="number" name='age' value={formValues.duration}
                        onChange={handleChange} />
                    {/* === Dificulty input === */}
                    <label htmlFor="">Dificultad</label>
                    {Array(5).fill().map((v, i) => 1 + i).map((item, index) => (
                        <button key={`dificulty-button-${index}`}>{item}</button>
                    ))}
                    {/* === Season input === */}
                    <label htmlFor="">Temporada</label>
                    <select name="" value={formValues.season}>
                        {seasons.map((season, index) => (
                            <option value={season} key={`season-option-${index}`}
                            >{season}</option>
                        ))}
                    </select>
                    <button type="submit" disabled={isDisabled}>Crear</button>
                </form>
                <Search countriesIds={countriesIds}
                    setCountriesIds={setCountriesIds}
                    setIsDisabled={setIsDisabled} />
            </div>
        </>
    )
}