import React from 'react'

export default function Checkbox(props) {
    let {handleChecks, value} = props
    return (
        <>
            <label >{value}</label>
            <input type="checkbox" name="seasons"
                value={value} onChange={handleChecks} />
        </>
    )
}
