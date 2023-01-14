import styles from './filters.module.css'
import { useDispatch, useSelector } from 'react-redux'

import { sortBy, filterBy, resetFilters } from '../../redux/actions'
import {continentOptions, sortfiltersOptions} from '../../utils/options'
import { useState } from 'react'

function Filters({setName, setCurrentIndex}) {
    const initialFilterValues = {sort: "", continent: "", activity:"", name: ""}
    const [filterValues, setFilterValues] = useState(initialFilterValues)
    const dispatch = useDispatch()

    // === Handlers ===
    const handleSort = (e) => {
        setCurrentIndex(0)
        const value = e.target.value
        setFilterValues({...filterValues, sort: value})
        dispatch(sortBy(value))
    }
    const handleFilterByContinent = (e) => {
        setCurrentIndex(0)
        const value = e.target.value
        setFilterValues({...filterValues, continent: value})
        dispatch(filterBy(value, null))
    }
    const handleFilterByActivity = (e) => {
        setCurrentIndex(0)
        const value = e.target.value
        setFilterValues({...filterValues, activity: value})
        dispatch(filterBy(null, value))
    }
    const handleName = (e) => {
        setCurrentIndex(0)
        const value = e.target.value
        setName(value)
    }
    const handleFilterReset = () => {
        dispatch(resetFilters())
    }

    // === Selectors ===
    const activities = useSelector(state => state.activities)

    return (
        <>
            <div className={styles.filters}>
                {/* === Name input === */}
                <input type="text" name="name" onChange={handleName} autoComplete='off'/>
                {/* === Filter by continent === */}
                <select name="contients" onChange={handleFilterByContinent}>
                    <option value="">select a continent</option>
                    {continentOptions.map((c,index) => (
                        <option value={c} key={`${index}-contient-option`}>{c}</option>
                    ))}
                </select>
                {/* === Filter by activity === */}
                <select name="activities" onChange={handleFilterByActivity}>
                    <option value="">select an activity</option>
                    {activities.length > 0 ? activities.map((activity) => (
                        <option key={`activity-${activity.id+1}`}
                        value={activity.name}>{activity.name}</option>
                    )) : <option>---</option>}
                </select>
                {/* === Sort options === */}
                <fieldset onChange={handleSort}>
                    <legend>Sort by</legend>
                    {sortfiltersOptions.map((item, index) => {
                        return(
                            <>
                                <label htmlFor={item} key={`${index+2}-sortLabel`}>{item}</label>
                                <input type="radio" name='sort' value={item}
                                key={`${index+3}-sortInput`}/>
                            </>
                        )
                    })}
                </fieldset>
                <button onClick={handleFilterReset}>
                    Reset
                </button>
            </div>
        </>
    )
}

export default Filters