import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDetails } from '../../redux/actions'

export default function Detail() {
    const params = useParams()
    const dispatch = useDispatch()
    const countryDetails = useSelector(state => state.countryDetail)

    useEffect(()=>{
        dispatch(getDetails(params.id))
    },[])

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
