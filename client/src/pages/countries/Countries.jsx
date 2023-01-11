import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './countries.module.css'

import { getCountries, getAllActivities, resetError } from '../../redux/actions'
import { Filters, Card, PageError, Pagination } from '../../components/index'
import { Paginate } from '../../utils/paginate'


export default function Countries() {
    // === Local state ===
    const [name, setName] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const dispatch = useDispatch()
    
    const cardsPerPage = 10
    const cardsFirstPage = 9

    useEffect(() => {
        dispatch(resetError())
        dispatch(getAllActivities())
        if (name !== undefined || name !== '') {
            setCurrentIndex(0)
            dispatch(getCountries(name))
        } else {
            setCurrentIndex(0)
            dispatch(getCountries())
        }
    }, [name])


    //selectors
    const filteredCountries = useSelector(state => state.filteredCountries)
    const err = useSelector(state => state.error)

    let nPages = Array.isArray(Paginate(filteredCountries, cardsPerPage, cardsFirstPage)[0]) ? 
    Paginate(filteredCountries, cardsPerPage, cardsFirstPage).length - 1 : 0

    return (
        <>
            <Filters name={name} setName={setName} setCurrentIndex={setCurrentIndex}/>
            {err.code !== '' ? <PageError text={err.code} /> : ''}
            {/* === Pagination === */}
            {<Pagination currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}  nPages={nPages}/>}
            {/* === Cards === */}
            <div className={styles.countriescontainer}>
                {nPages > 0 ? Paginate(filteredCountries, cardsPerPage, cardsFirstPage)[currentIndex].map((country) => (
                    <Card {...country} key={country.id}/>
                )) : Paginate(filteredCountries, cardsPerPage, cardsFirstPage).map((country) => (
                    <Card {...country} key={country.id}/>
                ))
                }
            </div>
            {/* === Pagination === */}
            {<Pagination currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}  nPages={nPages}/>}
        </>
    )
}
