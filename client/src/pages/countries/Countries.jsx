import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './countries.module.css'

import { getCountries } from '../../redux/actions'
import {Filters, Card} from '../../components/index'


export default function Countries() {

    return (
        <>
            <Filters/>
            <div className={styles.cardscontainer}>
            
            </div>
        </>
    )
}
