import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './countries.module.css'

import { getCountries } from '../../redux/actions'
import {Filters, Card} from '../../components/index'


export default function Countries() {
    const [name, setName] = useState('')
    const dispatch = useDispatch()

    useEffect(()=>{
        if(name !== undefined || name !== ''){
            dispatch(getCountries(name))
        }else{
            dispatch(getCountries())
        }
    },[name])

    //selectors
    const filteredCountries = useSelector(state => state.filteredCountries)
    
    return (
        <>
            <Filters name={name} setName={setName}/>
            <div className={styles.countriescontainer}>
                {filteredCountries.length > 0 &&
                filteredCountries.map((item,index) => (
                    <Card {...item} key={index+item.id}/>
                ))}
            </div>
        </>
    )
}
