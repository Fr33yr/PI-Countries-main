import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './countries.module.css'

import { getCountries } from '../../redux/actions'

import Card from '../../components/card/Card'
import Filters from '../../components/filters/filters'

export default function Countries() {
    const dispatch = useDispatch()
    const [filterCountries, setFilterCountries] = useState([])
    const countries = useSelector(state => state.countries)

    useEffect(() => {
        dispatch(getCountries())
        setFilterCountries(countries)
    }, [])


    return (
        <>
            <div className={styles.filters}>
                <Filters filterCountries={filterCountries}
                    setFilterCountries={setFilterCountries} />
                <form >
                    <input type="text" />
                    <button type="submit">Buscar</button>
                </form>
            </div>
            <div className={styles.countriescontainer}>

            </div>
        </>
    )
}
