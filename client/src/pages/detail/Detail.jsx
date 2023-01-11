import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAllActivities, getDetails } from '../../redux/actions'

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
                <img src={countryDetails.images[0] || "not image found"}
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
                    {countryDetails.activities.length > 0 ? countryDetails.activities.map((activity) => (
                        <>
                            <p>Activity: {activity.name}</p>
                            <p>Dificulty: {activity.dificulty}</p>
                            <p>Season: {activity.season}</p>
                        </>
                    )) : "No hay actividades"}
                </div>
            </div>
        </>
    )
}
