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
    const [search, setSearch] = useState('')
    const [filterCountries, setFilterCountries] = useState([])
    const [page, setPage] = useState(0)



    useEffect(() => {
        dispatch(getCountries())
        filterCountries.length > 0 ? "" : setFilterCountries(countries)

    }, [filterCountries])

    const ITEMS_PER_PAGE = 10
    let chunks = chunkArray(filterCountries, ITEMS_PER_PAGE)
    chunks && console.log(chunks[page])

    const handleFilter = (e) => {
        const { value } = e.target
        if (value === 'all') { setFilterCountries(countries) }
        else {
            setFilterCountries(countries.filter(c => c.continent === value))
        }
    }

    const handleSort = (e) => {
        const { value } = e.target
        if (value === "AZ") {
            setFilterCountries(filterCountries.sort((function (a, b) {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            })))
        }
        else if (value === "ZA") {
            setFilterCountries(filterCountries.sort((function (a, b) {
                if (a.name > b.name) {
                    return -1;
                }
                if (a.name < b.name) {
                    return 1;
                }
                return 0;
            })))
        }
        else if (value === "maxMin") {
            console.log(filterCountries)
            setFilterCountries(filterCountries.sort(function (a, b) { return b.population - a.population }))
        }
        else if (value === "minMax") {
            console.log(filterCountries)
            setFilterCountries(filterCountries.sort(function (a, b) { return a.population - b.population }))
        } else {
            setFilterCountries(filterCountries)
        }
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getCountries(search))
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
                <select onChange={handleFilter}>
                    {continents.map((c, index) => {
                        return (<option value={c} key={index} defaultValue={"all"}>{c}</option>)
                    })}
                </select>
                <select onChange={handleSort}>
                    {sortfilters.map((s, index) => {
                        return (<option value={s} key={index + 1} defaultValue={"AZ"}>{s}</option>)
                    })}
                </select>
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={handleSearch} />
                    <button type="submit">Buscar</button>
                </form>
            </div>
            <div className={styles.countriescontainer}>
                {chunks[page] && chunks[page].map((item) => <Card {...item} key={item.id}/>)}
            </div>
            <div className={styles.paginationbuttons}>
                <button onClick={prevHandler} disabled={page === 0}>Prev</button>
                {/* pag numbers */}
                <button onClick={nextHandler} disabled={page === chunks.length - 1}>Next</button>
            </div>
        </>
    )
}
