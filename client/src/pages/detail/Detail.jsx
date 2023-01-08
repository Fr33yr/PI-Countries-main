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
    const activities = useSelector(state => state.activities)

    return (
        <>
            <div className="countrydetail">
                <img src={"not image found"}
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
                    {activities.length > 0 ? activities.map((activity) => (
                        {
                            name: activity.name,
                            countries: activity.countries.map(country => country.id)
                        }
                    )).
                        filter(activity => activity.countries.includes(params.id))
                        .map((activity) => (
                            <p>{activity.name}</p>
                        ))
                        :
                        "No se encontaron actividades"}
                </div>
            </div>
        </>
    )
}
