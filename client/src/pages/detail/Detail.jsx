import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDetails } from '../../redux/actions'

export default function Detail() {
    const params = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getDetails(params.id))
    },[])

    //selectors
    const countryDetails = useSelector(state => state.countryDetail)

    return (
        <>
            <div className="countrydetail">
                <img src={countryDetails.images[1]} alt="flag" height={200} width={200} />
                <h2>{countryDetails.name}</h2>
                <h3>{countryDetails.id}</h3>
                <ul>
                    <li>Capital: {countryDetails.capital}</li>
                    <li>Subregion: {countryDetails.subregion}</li>
                    <li>Area: {countryDetails.area}</li>
                    <li>Poblacion: {countryDetails.population}</li>
                </ul>
                <div>
                    actividades turisticas
                </div>
            </div>
        </>
    )
}
