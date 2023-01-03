import styles from './searchresult.module.css'

function SearchResult({ name, id, handleAddCountry, countriesIds }) {
    return (
        <>
            <div className={styles.searchresult}>
                <p>{name}</p>
                <button onClick={() => handleAddCountry(id, name)}
                    disabled={countriesIds.includes(id)}>+</button>
            </div>
        </>
    )
}

export default SearchResult