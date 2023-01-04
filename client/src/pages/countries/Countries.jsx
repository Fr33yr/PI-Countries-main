import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './countries.module.css'

import { getCountries, getAllActivities } from '../../redux/actions'
import { Filters, Card } from '../../components/index'


export default function Countries() {
    const [name, setName] = useState('')
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAllActivities())
        if (name !== undefined || name !== '') {
            dispatch(getCountries(name))
        } else {
            dispatch(getCountries())
        }
    }, [name])


    //selectors
    const filteredCountries = useSelector(state => state.filteredCountries)
    const countries = useSelector(state => state.countries)


    return (
        <>
            <Filters name={name} setName={setName} />
            <div className={styles.countriescontainer}>
                {filteredCountries.length > 0 &&
                    filteredCountries.map((item, index) => (
                        <Card {...item} key={item.id} />
                    ))}
            </div>
        </>
    )
}
