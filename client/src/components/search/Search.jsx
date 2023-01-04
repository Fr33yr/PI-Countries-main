import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getCountries } from '../../redux/actions'
import styles from './search.module.css'

function Search( {setCountriesIds, countriesIds} ) {
    // === Local state ===
    const [search, setSearch] = useState('')
    const [selectedCountries, setSelectedCountries] = useState([])
    const [selected, setSelected] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        search.length > 0 ? dispatch(getCountries(search)) : ''
    }, [search])

    // === Selectors ===
    const countries = useSelector(state => state.countries)

    // === Handlers ===
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    const handleAddCountry = (country) => {
        setCountriesIds(countriesIds.concat([country.id]))
        setSelectedCountries(selectedCountries.concat([country]))
    }

    return (
        <>
            <div className={styles.searchcontainer}>
                <form>
                    <input type="text" placeholder='Country...'
                        onChange={handleSearch} onSelect={()=>setSelected(!selected)}
                    />
                </form>
                <div className={styles.searchview}>
                    {countries.map((country, index) => {
                        return (
                            <>
                                <div>
                                    <p>{country.name}</p>
                                    <button onClick={()=>handleAddCountry(country)}>+</button>
                                </div>
                            </>
                        )
                    })
                    }
                </div>
                {
                    selectedCountries.length > 0 ? selectedCountries.map((country, index) => {
                        return (
                            <>
                                <p>{country.name}</p>
                            </>
                        )
                    }) : ""
                }
            </div>
        </>
    )
}

export default Search