import styles from './filters.module.css'
import { useDispatch } from 'react-redux'

import { sortBy } from '../../redux/actions'

function Filters() {
    const dispatch = useDispatch()

    const handleSort = (e) => {
        dispatch(sortBy(e.target.value))
    }

    return (
        <>
            <div className={styles.filters}>
                <fieldset onChange={handleSort}>
                    <label htmlFor="A to Z">A to Z</label>
                    <input type="radio" name="sort" value={'A to Z'} />
                    <label htmlFor="Z to A">Z to A</label>
                    <input type="radio" name="sort" value={'Z to A'} />
                    <label htmlFor="morePopulation">morePopulation</label>
                    <input type="radio" name="sort" value={'morePopulation'} />
                    <label htmlFor="lessPopulation">lessPopulation</label>
                    <input type="radio" name="sort" value={'lessPopulation'} />
                </fieldset>
            </div>
        </>
    )
}

export default Filters