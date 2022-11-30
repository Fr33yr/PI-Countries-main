import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styles from './countries.module.css'

import {getCountries, orderBy} from '../../redux/actions'

import Card from '../../components/card/Card'

export default function Countries() {
    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries)
  
    useEffect(() => {
      dispatch(getCountries())
    }, [])
  
    countries.length > 0 && console.log(countries);
    return (
        <>
            <div className={styles.countriescontainer}>
                <button onClick={()=>dispatch(orderBy('AZ'))}>AZ</button>
                <button onClick={()=>dispatch(orderBy('ZA'))}>ZA</button>
                <button onClick={()=>dispatch(orderBy('maxMin'))}>Max_Min</button>
                <button onClick={()=>dispatch(orderBy('minMax'))}>Min_Max</button>
            </div>
        </>
    )
}
