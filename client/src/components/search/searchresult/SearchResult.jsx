import styles from './searchresult.module.css'

function SearchResult({id, name, handleAddCountry, countriesIds }) {
    return (
        <>
            <div className={styles.searchresult}>
                <p>{name}</p>
                <button onClick={() => handleAddCountry(id)}
                    disabled={countriesIds.includes(id)}>+</button>
            </div>
        </>
    )
}

export default SearchResult