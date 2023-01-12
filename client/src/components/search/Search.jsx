import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getCountries, resetCountries } from '../../redux/actions'
import styles from './search.module.css'

function Search( {setSelectedCountries, selectedCountries} ) {
    // === Local state ===
    const [search, setSearch] = useState('')
    const [selected, setSelected] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        search.length > 0 ? dispatch(getCountries(search)) : dispatch(resetCountries())
    }, [search])

    // === Selectors ===
    const countries = useSelector(state => state.countries)

    // === Handlers ===
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    const handleAddCountry = (country) => {
        setSelectedCountries(selectedCountries.concat([country]))
    }
    const handleRemoveCountry = (country) => {
        const {id} = country
        setSelectedCountries(selectedCountries.filter(country => country.id !== id))
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
                                <div className={styles.countryoption}>
                                    <p>{country.name}</p>
                                    <button onClick={()=>handleAddCountry(country)}
                                    disabled={selectedCountries.includes(country.id)}>+</button>
                                </div>
                            </>
                        )
                    })
                    }
                </div>
                {
                    selectedCountries.length > 0 ? selectedCountries.map((country, index) => {
                        return (
                            <div className={styles.selectedcountry}>
                                <h3>{country.name}</h3>
                                <button onClick={()=>handleRemoveCountry(country)}>-</button>
                            </div>
                        )
                    }) : ""
                }
            </div>
        </>
    )
}

export default Search