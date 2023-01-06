import {
    GET_COUNTRIES, CREATE_ACTIVITY,
    GET_DETAILS, SORTING, FILTER_BY_CONTINENT,
    GET_ACTIVITIES, FORM_ERROR, COUNTRIES_ERROR,
    RESET_ERROR, ERROR
} from './action.types'

const initialState = {
    countries: [],
    filteredCountries: [],
    activities: [],
    countryDetail: {},
    activity: {},
    error: {}
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_COUNTRIES:
            return {
                ...state,
                countries: [...action.payload],
                filteredCountries: [...action.payload]
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

        case FILTER_BY_CONTINENT:
            if (action.payload !== 'all') {
                return {
                    ...state,
                    filteredCountries: state.countries.slice().filter(
                        country => country.continent === action.payload.toLowerCase()
                    )
                }
            } else {
                return {
                    ...state,
                    filteredCountries: [...state.countries]
                }
            }

        case SORTING:
            if (action.payload === 'Z to A' || action.payload === 'za') {
                return {
                    ...state,
                    filteredCountries: state.filteredCountries.slice().sort(function (a, b) {
                        if (a.name < b.name) {
                            return 1;
                        }
                        if (a.name > b.name) {
                            return -1;
                        }
                        return 0;
                    })
                }
            }
            else if (action.payload === 'A to Z' || action.payload === 'az') {
                return {
                    ...state,
                    filteredCountries: state.filteredCountries.slice().sort(function (a, b) {
                        if (a.name < b.name) {
                            return -1;
                        }
                        if (a.name > b.name) {
                            return 1;
                        }
                        return 0;
                    })
                }
            }
            else if (action.payload === 'morePopulation') {
                return {
                    ...state,
                    filteredCountries: state.filteredCountries.slice().sort(function (a, b) {
                        return b.population - a.population
                    })
                }
            }
            else if (action.payload === 'lessPopulation') {
                return {
                    ...state,
                    filteredCountries: state.filteredCountries.slice().sort(function (a, b) {
                        return a.population - b.population
                    })
                }
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: [...action.payload]
            }
        case COUNTRIES_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case FORM_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case ERROR:
            return{
                ...state,
                error: action.payload
            }
        case RESET_ERROR:
            return {
                ...state,
                error: initialState.error
            }
        default:
            return { ...state }
    }
}