import {
    GET_COUNTRIES, CREATE_ACTIVITY,
    GET_DETAILS
} from './action.types'

const initialState = {
    countries: [],
    countryDetail: {},
    activity: {},
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: state.countries.concat(action.payload)
            }
        case GET_DETAILS:
            return {
                ...state,
                countryDetail: action.payload
            }
        case CREATE_ACTIVITY:
            return {
                ...state,
                activity: action.payload
            }
        default:
            return { ...state }
    }
}