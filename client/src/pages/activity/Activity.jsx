import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './activity.module.css'
import { getCountries, createActivity } from '../../redux/actions'

export default function Activity() {
    const [selectedSeason, setSelectedSeason] = useState({
        seasons: []
    })
    const [form, setForm] = useState({})
    const [search, setSearch] = useState('')
    const [countriesIds, setCountriesIds] = useState([])
    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries)




    useEffect(() => {
        dispatch(getCountries(search))
    }, [search])

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

    const handleSearch = (e) => {
        e.preventDefault()
        search === "" ? [] : dispatch(getCountries(search))
    }

    const handleAddCountry = (name) => {
        setCountriesIds(countriesIds.concat([name]))
    }

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
                    
                    <button type="submit">Crear</button>
                </form>

                <div className="searchcontainer">
                    <form onSubmit={handleSearch}>
                        <input type="text" onChange={(e) => setSearch(e.target.value)} />
                        <button type="submit" disabled={search === ""}>Find</button>
                    </form>
                    <div className="searchview">
                        {
                            search !== '' && countries.length > 0 && countries.map((c, index) => (
                                <div className={styles.searchresult}>
                                    <p>{c.name}</p>
                                    <button onClick={() => handleAddCountry(c.id)}
                                        disabled={countriesIds.includes(c.id)}>+</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}