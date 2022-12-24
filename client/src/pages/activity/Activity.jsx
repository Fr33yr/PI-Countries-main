import { useState } from 'react'
import styles from './activity.module.css'
import { createActivity } from '../../redux/actions'
import { Checkbox, Radio, Text, Number, Search } from '../../components/index'

export default function Activity() {
    const [form, setForm] = useState({ name: '', dificulty: 1, duration: 1 })
    const [selectedSeason, setSelectedSeason] = useState({
        seasons: []
    })
    const [countriesIds, setCountriesIds] = useState([])


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
                    <Text setForm={setForm} />
                    <Number setForm={setForm} />
                    <Radio setForm={setForm} />
                    <Checkbox selectedSeason={selectedSeason} setSelectedSeason={setSelectedSeason} />
                    <button type="submit">Crear</button>
                </form>
                <Search countriesIds={countriesIds}
                    setCountriesIds={setCountriesIds} />
            </div>
        </>
    )
}