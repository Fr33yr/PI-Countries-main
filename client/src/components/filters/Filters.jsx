import { useDispatch } from 'react-redux'

import { sortBy } from '../../redux/actions'
import styles from './filters.module.css'

function Filters() {
    const dispatch = useDispatch()

    const handleSort = (e) => {
        dispatch(sortBy(e.target.value))
    }

    return (
        <>
            <div className={styles.filters}>
                <fieldset onChange={handleSort}>
                    <input type="radio" name="sort" value={'A to Z'} />
                    <input type="radio" name="sort" value={'Z to A'} />
                    <input type="radio" name="sort" value={'morePopulation'} />
                    <input type="radio" name="sort" value={'lessPopulation'} />
                </fieldset>
            </div>
        </>
    )
}

export default Filters