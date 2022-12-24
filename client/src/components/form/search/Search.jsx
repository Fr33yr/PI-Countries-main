import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getCountries } from '../../../redux/actions'

function Search({ countriesIds, setCountriesIds }) {
    const [search, setSearch] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCountries(search))
    }, [search])

    //selectors
    const countries = useSelector(state => state.countries)

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleAddCountry = (name) => {
        setCountriesIds(countriesIds.concat([name]))
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
                            <div className={styles.searchresult}>
                                <p>{c.name}</p>
                                <button onClick={() => handleAddCountry(c.id)}
                                    disabled={countriesIds.includes(c.id)}>+</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Search