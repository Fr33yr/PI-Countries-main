import styles from './pagination.module.css'

function Pagination({ currentIndex, setCurrentIndex, nPages }) {
    // === Local state ===
    let prevPage = currentIndex - 1
    let nextPage = currentIndex + 1

    // === handlers ===
    const handlePrev = () => {
        setCurrentIndex(currentIndex - 1)
    }
    const handleNext = () => {
        setCurrentIndex(currentIndex + 1)
    }
    const handleFist = () => {
        setCurrentIndex(0)
    }
    const handleLast = () => {
        setCurrentIndex(nPages)
    }
    
    return (
        <>
            <div className={styles.pagination}>
                <button onClick={handleFist} disabled={nPages === 0 || currentIndex === 0}>First</button>
                <button  onClick={handlePrev} disabled={currentIndex === 0 || nPages === 0}
                >Prev</button>
                <p>{prevPage >= 0 ? prevPage : ""}</p>
                <p className={styles.currentPage}>{currentIndex}</p>
                <p>{nextPage > nPages || nPages === 0 ? "" : nextPage}</p>
                <button  onClick={handleNext} disabled={currentIndex === nPages || nPages === 0}
                >Next</button>
                <button onClick={handleLast} disabled={nPages === 0 || currentIndex === nPages}>Last</button>
            </div>
        </>
    )
}

export default Pagination