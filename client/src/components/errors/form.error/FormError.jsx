import { useEffect } from 'react'
import { useState } from 'react'
import styles from './formerror.module.css'

function FormError({text}) {
    const [error, setError] = useState('')
    useEffect(()=>{
        if(text === 'ERR_BAD_REQUEST'){
            setError('Hay una actividad con el mismo nombre')
        }else{
            setError('')
        }
    },[text])
    return (    
        <>
            <p className={styles.formerror}>{error}</p>
        </>
    )
}

export default FormError