import styles from './filters.module.css'
import { useDispatch, useSelector } from 'react-redux'

import { sortBy, filterBy } from '../../redux/actions'
import {continentOptions, sortfiltersOptions} from '../../utils/options'

function Filters({name, setName}) {
    const dispatch = useDispatch()

    // === Handlers ===
    const handleSort = (e) => {
        const value = e.target.value
        dispatch(sortBy(value))
    }
    const handleFilterByContinent = (e) => {
        const value = e.target.value
        dispatch(filterBy(value, null))
    }
    const handleName = (e) => {
        const value = e.target.value
        setName(value)
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
                    {continentOptions.map((c,index) => (
                        <option value={c} key={index}>{c}</option>
                    ))}
                </select>
                {/* === Filter by activity === */}
                <select name="activities">
                    {activities.length > 0 ? activities.map((activity) => (
                        <option key={`activity-${activity.id}`}>{activity.name}</option>
                    )) : <option>---</option>}
                </select>
                {/* === Sort options === */}
                <fieldset onChange={handleSort}>
                    <legend>Sort by</legend>
                    {sortfiltersOptions.map((item, index) => {
                        return(
                            <>
                                <label htmlFor={item}>{item}</label>
                                <input type="radio" name='sort' value={item}/>
                            </>
                        )
                    })}
                </fieldset>
            </div>
        </>
    )
}

export default Filters