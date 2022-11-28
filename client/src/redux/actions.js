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

const getCountries = (countries) => {
    return {
        type: GET_COUNTRIES,
        payload: countries
    }
}

const getDetails = (details) => {
    return {
        type: GET_DETAILS,
        payload: details
    }
}

const fetchDetails = (id) => {
    return function (dispatch) {
        dispatch(getDetails())
        axios.get(`http://localhost:3001/countries/${id}`)
            .then(res => res.data)
            .then(d => dispatch(getDetails(d)))
            .catch(err => console.log(err))
    }
}

const fetchCountries = (name) => {
    return function (dispatch) {
        dispatch(getCountries())
        if (!name) {
            axios.get(`http://localhost:3001/countries/`)
                .then(res => res.data)
                .then(d => dispatch(getCountries(d)))
                .catch(res => console.log(res))
        } else {
            axios.get(`http://localhost:3001/countries?name=${name}`)
                .then(res => res.data)
                .then(d => dispatch(getCountries(d)))
                .catch(res => console.log(res))
        }
    }
}

export { getCountries, createActivity, getDetails, fetchDetails, fetchCountries }