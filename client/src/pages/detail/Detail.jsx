import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { fetchDetails } from '../../redux/actions'

export default function Detail() {
    const params = useParams()

    useEffect(()=>{
        fetchDetails(params.id)
    },[])

    const countryDetails = useSelector(state => state.countryDetail)
    countryDetails && console.log(countryDetails)

    return (
        <>
            <div className="countrydetail">
                <img src="" alt="flag" height={200} width={200} />
                <h2>Nombre del pais</h2>
                <h3>Codigo del pais</h3>
                <ul>
                    <li>capital</li>
                    <li>subregion</li>
                    <li>area</li>
                    <li>poblacion</li>
                </ul>
                <div>
                    actividades turisticas
                </div>
            </div>
        </>
    )
}
