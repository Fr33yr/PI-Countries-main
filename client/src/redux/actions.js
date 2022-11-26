import axios from 'axios'
import { GET_COUNTRIES, CREATE_ACTIVITY, GET_DETAILS } from './action.types'

const getCountries = async (name) => {
    return function (dispatch) {
        axios.get(`http://localhost:3001/countries?name=${name}`)
            .then(res => res.data)
            .then(d => dispatch({ type: GET_COUNTRIES, payload: d }))
            .catch(err => console.log(err))
    }
}

const createActivity = async (props) => {
    return function (dispatch) {
        const { name, dificulty, duration, season } = props
        axios.post(`http://localhost:3001/activities`, {
            name, dificulty, duration, season
        }).then(function (response) {
            dispatch({type: CREATE_ACTIVITY, payload: props})
        })
            .catch(function (error) {
                console.log(error);
            });
    }
}

const getDetails = (id) => async dispatch => {
    try {
        const response = await axios.get(`http://localhost:3001/countries/${id}`)
        dispatch({type: GET_DETAILS, payload: response.data})
    } catch (error) {
        console.log(error);
    }
}