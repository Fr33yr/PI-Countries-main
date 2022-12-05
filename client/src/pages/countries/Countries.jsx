import { useEffect, useState, useId } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './countries.module.css'

import { getCountries } from '../../redux/actions'

import Card from '../../components/card/Card'
import { continents } from '../../utils/continents'
import { sortfilters } from '../../utils/sortfilters'
import { chunkArray } from '../../utils/chunker'


export default function Countries() {
    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries)
    const [search, setSearch] = useState({})
    const [filterCountries, setFilterCountries] = useState([])
    const [page, setPage] = useState(0)
    const [chunks, setChunks] = useState([])


    const ITEMS_PER_PAGE = 10

    useEffect(() => {
        dispatch(getCountries(search.name))
        filterCountries.length > 0 ? "" : setFilterCountries(countries)

        //setChunks(chunkArray(filterCountries, ITEMS_PER_PAGE))
        //chunks && console.log(chunks)
        
        console.log(search);
        filterCountries.length > 0 && console.log(filterCountries)
    }, [search])

    const sortChangeHandler = (e) =>{
        setSearch({...search, sort: e.target.value})
    }

    const continentsChangeHandler = (e) =>{
        setSearch({...search, continents: e.target.value})
    }

    const nameChangeHandler = (e) =>{
        setSearch({...search, name: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //dispatch(getCountries(search))
        console.log(search)
    }

    const nextHandler = () => {
        setPage(page + 1)
    }

    const prevHandler = () => {
        setPage(page - 1)
    }

    return (
        <>
            <div className={styles.filters}>
                <form onSubmit={handleSubmit}>
                    <select onChange={continentsChangeHandler}>
                        {continents.map((c, index) => {
                            return (<option name="continent" 
                            value={c} key={index} >{c}</option>)
                        })}
                    </select>
                    <select onChange={sortChangeHandler}>
                        {sortfilters.map((s, index) => {
                            return (<option name="sort" 
                            value={s} key={index + 1} >{s}</option>)
                        })}
                    </select>
                    <input type="text" onChange={nameChangeHandler} name="name" />
                    <button type="submit">Buscar</button>
                </form>
            </div>
            <div className={styles.countriescontainer}>
                {chunks[page] && chunks[page].map((item) => <Card {...item} key={item.id} />)}
            </div>
            <div className={styles.paginationbuttons}>
                <button onClick={prevHandler} disabled={page === 0}>Prev</button>
                {/* pag numbers */}
                <button onClick={nextHandler} disabled={page === chunks.length - 1}>Next</button>
            </div>
        </>
    )
}
