import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './activity.module.css'
import { getCountries, createActivity } from '../../redux/actions'
import { Checkbox, Radio, Text, Number } from '../../components/index'

export default function Activity() {
    const [form, setForm] = useState({name: '', dificulty: 1, duration: 1})
    const [selectedSeason, setSelectedSeason] = useState({
        seasons: []
    })
    const [countriesIds, setCountriesIds] = useState([])
    const [search, setSearch] = useState('')

    const dispatch = useDispatch()
 
    //selectors
    const countries = useSelector(state => state.countries)



    useEffect(() => {
        dispatch(getCountries(search))
    }, [search])

    const handleSearch = (e) => {
        setSearch(e.target.value)
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
                    <Text setForm={setForm}/>
                    <Number setForm={setForm}/>
                    <Radio setForm={setForm} />
                    <Checkbox selectedSeason={selectedSeason} setSelectedSeason={setSelectedSeason} />
                    <button type="submit">Crear</button>
                </form>

                <div className={styles.searchcontainer}>
                    <form>
                        <input type="text" placeholder='countries...' 
                        onChange={handleSearch} />
                    </form>
                    <div className={styles.searchview}>
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