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

    // === Selectors ===
    const filteredCountries = useSelector(state => state.filteredCountries)
    const err = useSelector(state => state.error)

    // === Pagination constants ===
    const cardsPerPage = 10
    const cardsFirstPage = 9
    // === Pages ===
    let pages = Paginate(filteredCountries, cardsPerPage, cardsFirstPage)[currentIndex]
    let page = Paginate(filteredCountries, cardsPerPage, cardsFirstPage)
    let nPages = Array.isArray(page[0]) ? page.length - 1 : 0

    return (
        <>
            <Filters name={name} setName={setName} setCurrentIndex={setCurrentIndex}/>
            {err.code !== '' ? <PageError text={err.code} /> : ''}
            {/* === Pagination === */}
            {<Pagination currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}  nPages={nPages}/>}
            {/* === Cards === */}
            <div className={styles.countriescontainer}>
                {nPages > 0 ? pages.map((country) => (
                    <Card {...country} key={country.id}/>
                )) : page.map((country) => (
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
