import { useState, useEffect } from 'react'
import styles from './pagination.module.css'

function Pagination() {
    // === Local state ===
    const [isDisabled, setIsDisabled] = useState(false)

    return (
        <>
            <div className={styles.pagination}>
                <button disabled={isDisabled}>Prev</button>
                <p>prevPage</p>
                <p>currentPage</p>
                <p>nextPage</p>
                <button disabled={isDisabled}>Next</button>
            </div>
        </>
    )
}

export default Pagination