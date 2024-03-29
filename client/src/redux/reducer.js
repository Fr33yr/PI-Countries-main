import {
    GET_COUNTRIES, RESET_COUNTRIES, CREATE_ACTIVITY,
    GET_DETAILS, SORTING, FILTER_BY_CONTINENT,
    GET_ACTIVITIES, RESET_ERROR, ERROR, FILTER_BY_ACTIVITY,
    RESET_FILTERS
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

        case RESET_COUNTRIES:
            return {
                ...state,
                countries: initialState.countries
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

        case FILTER_BY_ACTIVITY:
            return {
                ...state,
                filteredCountries: state.activities.filter((activity) => activity.name === action.payload)
                    .map((c) => c.countries)[0]
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
        case RESET_FILTERS:
            return {
                ...state,
                filteredCountries: state.countries
            }

        case GET_ACTIVITIES:
            return {
                ...state,
                activities: [...action.payload]
            }
        case ERROR:
            return {
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