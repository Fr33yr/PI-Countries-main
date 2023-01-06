import { useEffect, useState } from "react"
import {useDispatch, useSelector} from 'react-redux'
import {resetError} from '../../../redux/actions'

function PageError({ text }) {
    // === Local state ===
    const [errorMessage, setErrorMessage] = useState('')
    const dispatch = useDispatch()

    // === Selectors ===
    const countries = useSelector(state => state.countries)

    useEffect(()=>{
        if(text === 'ERR_BAD_REQUEST' && countries.length === 0) {setErrorMessage('Not found')}
        else if(text === 'ERR_NETWORK') {setErrorMessage('Connection error')}
        else {dispatch(resetError())}
    },[text])

    return (
        <div>{errorMessage}</div>
    )
}

export default PageError