import axios from 'axios'
import {
    GET_COUNTRIES,
    CREATE_ACTIVITY,
    GET_DETAILS, FILTER_BY_CONTINENT,
    FILTER_BY_ACTIVITY, SORTING, GET_ACTIVITIES
} from './action.types'


// Activities actions
const createActivity = (props) => {
    return async function (dispatch) {
        const { name, dificulty, duration, season, countriesIds } = props

        axios.post(`http://localhost:3001/activities`, {
            name, dificulty, duration, season, countriesIds
        }).then(function (response) {
            dispatch({ type: CREATE_ACTIVITY, payload: response.data })
        })
            .catch((error) => {
                dispatch({type: CREATE_ACTIVITY, payload: error.response.data})
            });
    }
}

const getAllActivities = () => {
    return async function (dispatch) {

        const activities = await axios.get(`http://localhost:3001/activities`)

        try {
            dispatch({ type: GET_ACTIVITIES, payload: activities.data })
        } catch (error) {
            return error
        }
    }
}

// Countries actions
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

const sortBy = (payload) => {
    return {
        type: SORTING,
        payload
    }
}

const filterBy = (continent, activity) => {
    if (continent && activity) {
        return {
            type: `${FILTER_BY_CONTINENT + FILTER_BY_ACTIVITY}`,
            payload: { continent, activity }
        }
    }
    if (!activity) {
        return {
            type: FILTER_BY_CONTINENT,
            payload: continent
        }
    }
    if (!continent) {
        return {
            type: FILTER_BY_ACTIVITY,
            payload: activity
        }
    }
}

export { getCountries, createActivity, getDetails, sortBy, filterBy, getAllActivities }