import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styles from './countries.module.css'

import {getCountries} from '../../redux/actions'
import Card from '../../components/card/Card'

export default function Countries() {
    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries)
  
    useEffect(() => {
      dispatch(getCountries())
    }, [])
  
    countries && console.log(countries);
    return (
        <>
            <div className={styles.countriescontainer}>

            </div>
        </>
    )
}
