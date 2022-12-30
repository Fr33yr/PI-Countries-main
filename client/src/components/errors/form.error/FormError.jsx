import styles from './formerror.module.css'

function FormError({text}) {
    return (    
        <>
            <p className={styles.formerror}>{text}</p>
        </>
    )
}

export default FormError