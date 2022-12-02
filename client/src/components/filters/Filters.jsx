import { useSelector } from "react-redux"
import { sortfilters } from "../../utils/sortfilters"
import { continents } from '../../utils/continents'
import { useId } from 'react'


export default function Filters(props) {

    const countries = useSelector(state => state.countries)
    const activities = countries.map((a) => a.activities).concat()
    let { filterCountries, setFilterCountries } = props

    const handleSort = (e) => {
        let { value } = e.target
        if (value === "AZ") {
            setFilterCountries(filterCountries.sort((function (a, b) {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            })))
        }
        else if (value === "ZA") {
            setFilterCountries(filterCountries.sort((function (a, b) {
                if (a.name > b.name) {
                    return -1;
                }
                if (a.name < b.name) {
                    return 1;
                }
                return 0;
            })))
        }
        else if (value === "maxMin") {
            console.log(filterCountries)
            setFilterCountries(filterCountries.sort(function (a, b) { return b.population - a.population }))
        }
        else if (value === "minMax") {
            console.log(filterCountries)
            setFilterCountries(filterCountries.sort(function (a, b) { return a.population - b.population }))
        }
    }

    const hanldeSelect = (e) => {
        let { value } = e.target
        if (value === "all") { setFilterCountries(countries) }
        else {
            setFilterCountries(countries.filter(c => c.continent === value))
        }
    }

    return (
        <>
            <select onChange={handleSort}>
                {sortfilters.map((s) => {
                    let id = useId()
                    return <option value={s} key={id}>{s}</option>
                })}
            </select>
            <select onChange={hanldeSelect}>
                {continents.map((c, index) => (
                    <option value={c} key={index} >{c}</option>
                ))}
            </select>
            <select>
                {activities.length > 0 ? <option value="" disabled>No activities</option> : activities.filter((element, index) => {
                    return activities.indexOf(element) === index
                }).map((a) => {
                    const id = useId()
                    return <option value={a} key={id}>{a}</option>
                })}
            </select>
        </>
    )
}
