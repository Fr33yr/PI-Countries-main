import axios from 'axios'
import { GET_COUNTRIES, CREATE_ACTIVITY, GET_DETAILS, ORDER_AZ, ORDER_ZA, ORDER_MIN_TO_MAX, ORDER_MAX_TO_MIN, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY } from './action.types'

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
        } else {
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

const sortBy = (order) => {
    switch (order) {
        case 'AZ':
            return { type: ORDER_AZ }
        case 'ZA':
            return { type: ORDER_ZA }
        case 'minMax':
            return { type: ORDER_MIN_TO_MAX }
        case 'maxMin':
            return { type: ORDER_MAX_TO_MIN }
    }
}

const filterBy = (continent, activity) => {
    if (continent && activity) { 
        return{
            type: `${FILTER_BY_CONTINENT+FILTER_BY_ACTIVITY}`,
            payload: {continent, activity}
        }
    }
    if (!activity) {
        return{
            type: FILTER_BY_CONTINENT,
            payload: continent
        }
    }
    if (!continent) { 
        return{
            type: FILTER_BY_ACTIVITY,
            payload: activity
        }
    }
}

export { getCountries, createActivity, getDetails, sortBy, filterBy }