import {
    GET_COUNTRIES, CREATE_ACTIVITY,
    GET_DETAILS, ORDER_AZ,
    ORDER_ZA, ORDER_MAX_TO_MIN,
    ORDER_MIN_TO_MAX
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
                countries: [...action.payload]
            }
        case ORDER_AZ:
            if(state.countries <= 1) return{...state}
            return {
                ...state,
                countries: state.countries.sort((function (a, b) {
                    if (a.name < b.name) {
                      return -1;
                    }
                    if (a.name > b.name) {
                      return 1;
                    }
                    return 0;
                  }))
            }
        case ORDER_ZA:
            if(state.countries <= 1) return{...state}
            return{
                ...state,
                countries: state.countries.sort((function (a, b) {
                    if (a.name > b.name) {
                      return -1;
                    }
                    if (a.name < b.name) {
                      return 1;
                    }
                    return 0;
                  }))
            }
        case ORDER_MAX_TO_MIN:
            if(state.countries <= 1) return{...state}
            return{
                ...state,
                countries: state.countries.sort(function(a, b){return b.population - a.population})
            }
        case ORDER_MIN_TO_MAX:
            if(state.countries <= 1) return{...state}
            return{
                ...state,
                countries: state.countries.sort(function(a, b){return a.population - b.population})
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