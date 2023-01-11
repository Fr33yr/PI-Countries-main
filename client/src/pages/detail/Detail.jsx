import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAllActivities, getDetails } from '../../redux/actions'
import { ActivityDetail } from '../../components/index'

export default function Detail() {
    const params = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDetails(params.id))
        dispatch(getAllActivities())
    }, [])

    //selectors
    const countryDetails = useSelector(state => state.countryDetail)

    return (
        <>
            <div className="countrydetail">
                <img src={countryDetails.images ? countryDetails.images[0] : "image not found"}
                    alt="flag" height={200} width={200} />
                <h2>{countryDetails.name}</h2>
                <h3>{countryDetails.id}</h3>
                <ul>
                    <li>Capital: {countryDetails.capital}</li>
                    <li>Subregion: {countryDetails.subregion}</li>
                    <li>Area: {countryDetails.area}</li>
                    <li>Poblacion: {countryDetails.population}</li>
                </ul>
                <div>
                    {countryDetails.activities ? countryDetails.activities.map((activity) => (
                        <>
                            <ActivityDetail {...activity} key={activity.name}/>
                        </>
                    )) : "No hay actividades"}
                </div>
            </div>
        </>
    )
}
