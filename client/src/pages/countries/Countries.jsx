import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './countries.module.css'

import { getCountries, getAllActivities, resetError } from '../../redux/actions'
import { Filters, Card, PageError, Pagination } from '../../components/index'


export default function Countries() {
    const [name, setName] = useState('')
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(resetError())
        dispatch(getAllActivities())
        if (name !== undefined || name !== '') {
            dispatch(getCountries(name))
        } else {
            dispatch(getCountries())
        }
    }, [name])


    //selectors
    const filteredCountries = useSelector(state => state.filteredCountries)
    const err = useSelector(state => state.error)
console.table(filteredCountries);

    return (
        <>
            <Filters name={name} setName={setName} />
            {err.code !== '' ? <PageError text={err.code} /> : ''}
            {filteredCountries.length > 0 ? <Pagination /> : ""}
            <div className={styles.countriescontainer}>
                {filteredCountries.length > 0 &&
                    filteredCountries.map((item) => (
                        <Card {...item} key={`card-${item.id}`} />
                    ))}
            </div>
            {filteredCountries.length > 0 ? <Pagination /> : ""}
        </>
    )
}
