import axios from 'axios'
import {
    GET_COUNTRIES, CREATE_ACTIVITY,
    GET_DETAILS, FILTER_BY_CONTINENT,
    FILTER_BY_ACTIVITY, SORTING, GET_ACTIVITIES,
    RESET_COUNTRIES, RESET_ERROR, ERROR
} from './action.types'


// === Activities actions ===
const createActivity = (props) => {
    return async function (dispatch) {
        const { name, dificulty, duration, season, countriesIds } = props

        axios.post(`http://localhost:3001/activities`, {
            name, dificulty, duration, season, countriesIds
        }).then(function (response) {
            dispatch({ type: CREATE_ACTIVITY, payload: response.data })
        })
            .catch((error) => {
                dispatch({ type: ERROR, payload: error.response.data })
            });
    }
}

const getAllActivities = () => {
    return async function (dispatch) {
        try {
            const activities = await axios.get(`http://localhost:3001/activities`)
            dispatch({ type: GET_ACTIVITIES, payload: activities.data })
        } catch (error) {
            dispatch({ type: ERROR, payload: error })
        }
    }
}

// === Countries actions ===
const getCountries = (name) => {
    return async function (dispatch) {
        try {
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
        } catch (error) {
            dispatch({ type: ERROR, payload: error })
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
            .catch(err => {
                dispatch({ type: ERROR, payload: err.data })
            })
    }
}

// === Filters actions ===
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

// === Resets ===
const resetError = () => {
    return {
        type: RESET_ERROR,
    }
}

const resetCountries = () => {
    return {
        type: RESET_COUNTRIES
    }
}

export {
    getCountries, createActivity,
    getDetails, sortBy, filterBy,
    getAllActivities, resetError,
    resetCountries
}