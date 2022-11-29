import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './countries.module.css'

import {getCountries} from '../../redux/actions'

export default function Countries() {
    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries)
  
    useEffect(() => {
      dispatch(getCountries())
    }, [])
  
    countries && console.log(countries);
    return (
        <>
            <div className="countries">

            </div>
        </>
    )
}
