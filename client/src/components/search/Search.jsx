import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getCountries } from '../../redux/actions'
import styles from './search.module.css'
import { SearchResult } from '../index'

function Search({ countriesIds, setCountriesIds }) {
    const [search, setSearch] = useState('')
    const [countriesNames, setCountriesNames] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCountries(search))
    }, [search])

    //selectors
    const countries = useSelector(state => state.countries)

    //handlers
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleAddCountry = (id, name) => {
        setCountriesIds(countriesIds.concat([id]))
        setCountriesNames(countriesNames.concat([name]))
    }

    return (
        <>
            <div className={styles.searchcontainer}>
                <form>
                    <input type="text" placeholder='countries...'
                        onChange={handleSearch} />
                </form>
                <div className={styles.searchview}>
                    {
                        search !== '' && countries.length > 0 && countries.map((c, index) => (
                            <SearchResult id={c.id} name={c.name} countriesIds={countriesIds}
                                handleAddCountry={handleAddCountry} key={index + 4} />
                        ))
                    }
                </div>
                {
                    countriesNames.length > 0 ? countriesNames.map(c => (
                        <div>
                            <p>{c}</p>
                        </div>
                    )) : ""
                }
            </div>
        </>
    )
}

export default Search