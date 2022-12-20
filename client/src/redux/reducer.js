import {
    GET_COUNTRIES, CREATE_ACTIVITY,
    GET_DETAILS, SORTING, FILTER_BY_CONTINENT
} from './action.types'

const initialState = {
    countries: [],
    filteredCountries: [],
    countryDetail: {},
    activity: {},
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_COUNTRIES:
            return {
                ...state,
                countries: state.countries.concat(action.payload),
                filteredCountries: [...state.countries]
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
            if (action.payload !== 'filterBy:') {
                return {
                    ...state,
                    filteredCountries: state.filteredCountries.slice().filter(
                        country => country.contient === action.payload
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

        default:
            return { ...state }
    }
}