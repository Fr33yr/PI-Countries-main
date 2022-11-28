import axios from 'axios'
import { GET_COUNTRIES, CREATE_ACTIVITY, GET_DETAILS } from './action.types'

const createActivity = async (props) => {
    return function (dispatch) {
        const { name, dificulty, duration, season } = props
        axios.post(`http://localhost:3001/activities`, {
            name, dificulty, duration, season
        }).then(function (response) {
            dispatch({ type: CREATE_ACTIVITY, payload: props })
        })
            .catch(function (error) {
                console.log(error);
            });
    }
}

const getCountries = (name) => {
    return async function (dispatch) {
        if (!name) {
            const countries = await axios.get(`http://localhost:3001/countries/`)
            return dispatch({
                type: GET_COUNTRIES,
                payload: countries.data
            })
        }else{
            const countries = await axios.get(`http://localhost:3001/countries?name=${name}`)
            return dispatch({
                type: GET_COUNTRIES,
                payload: countries.data
            })
        }
    }
}

const getDetails = (id) => {
    return function (dispatch) {
        axios.get(`http://localhost:3001/countries/${id}`)
            .then(res => res.data)
            .then(d => dispatch({
                type: GET_DETAILS,
                payload: d
            }))
            .catch(err => console.log(err))
    }
}

export { getCountries, createActivity, getDetails }