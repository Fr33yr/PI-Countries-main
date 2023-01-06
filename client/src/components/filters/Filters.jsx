import styles from './filters.module.css'
import { useDispatch } from 'react-redux'

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

    return (
        <>
            <div className={styles.filters}>
                <input type="text" name="name" onChange={handleName} autoComplete='off'/>
                <select name="contients" onChange={handleFilterByContinent}>
                    {continentOptions.map((c,index) => (
                        <option value={c} key={index}>{c}</option>
                    ))}
                </select>
                <fieldset onChange={handleSort}>
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