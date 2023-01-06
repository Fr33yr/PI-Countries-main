import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './countries.module.css'

import { getCountries, getAllActivities, resetError } from '../../redux/actions'
import { Filters, Card, PageError } from '../../components/index'


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


    return (
        <>
            <Filters name={name} setName={setName} />
            {err.code !== ''? <PageError text={err.code}/> : ''}
            <div className={styles.countriescontainer}>
                {filteredCountries.length > 0 &&
                    filteredCountries.map((item, index) => (
                        <Card {...item} key={item.id} />
                    ))}
            </div>
        </>
    )
}
