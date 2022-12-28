import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './activity.module.css'
import { createActivity } from '../../redux/actions'
import {
    Checkbox, Radio, Text, Number,
    Search
} from '../../components/index'
import { useEffect } from 'react'

export default function Activity() {
    const [form, setForm] = useState({ name: '', dificulty: '', duration: 1 })
    const [selectedSeason, setSelectedSeason] = useState({
        seasons: []
    })
    const [countriesIds, setCountriesIds] = useState([])
    const [isDisabled, setIsDisabled] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        if (form.dificulty === '' || form.name === '' || selectedSeason.seasons.length === 0) {
            setIsDisabled(true)
        } else {
            setIsDisabled(false)
        }
    }, [form])

    //handlers
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createActivity({
            ...form,
            season: selectedSeason.seasons,
            countriesIds: countriesIds
        }))
    }

    return (
        <>
            <div className={styles.activities}>
                <form className={styles.activityform} onSubmit={handleSubmit}>
                    <Text setForm={setForm} form={form} />
                    <Number setForm={setForm} />
                    <Radio setForm={setForm} />
                    <Checkbox selectedSeason={selectedSeason}
                        setSelectedSeason={setSelectedSeason} />
                    <button type="submit" disabled={isDisabled}>Crear</button>
                </form>
                <Search countriesIds={countriesIds}
                    setCountriesIds={setCountriesIds}
                    setIsDisabled={setIsDisabled} />
            </div>
        </>
    )
}