import { useState } from 'react'
import styles from './activity.module.css'
import { seasons as seasonsNames } from '../../utils/seasons'
import Checkbox from '../../components/checkbox/Checkbox'

export default function Activity() {
    const [selectedSeason, setSelectedSeason] = useState({
        seasons: []
    })
    const [form, setForm] = useState({})

    const handleChecks = (e) => {
        const { value, checked } = e.target
        const { seasons } = selectedSeason

        console.log(`${value} is ${checked}`);

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

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ ...form, ...selectedSeason })
    }

    return (
        <>
            <form className={styles.activityform} onSubmit={handleSubmit}>
                <label>Nombre: </label>
                <input type="text" name='name' value={form.name}
                    required onChange={handleChange} />
                <label>Dificultad: </label>
                <input type="number" min={1} max={5} name='dificulty' value={form.dificulty}
                    required onChange={handleChange} />
                <label>Duracion: </label>
                <input type="number" name='duration' value={form.duration}
                    min={1} max={99} required onChange={handleChange} />
                <label>Temporada: </label>
                {seasonsNames.map((s, index) => (
                <Checkbox handleChecks={handleChecks} value={s} key={index}/>
                ))}
                <label>Paises</label>
                <button type="submit">Crear</button>
            </form>
        </>
    )
}