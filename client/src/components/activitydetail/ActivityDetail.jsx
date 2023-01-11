import { useState } from "react"

function ActivityDetail(props) {
    // === Local state ===
    const [toggle, setToggle] = useState(false)
    const { name, dificulty, duration, season } = props

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <div className="">
                <p>{name}</p><button onClick={handleToggle}>+</button>
                {
                    toggle ? <>
                        <p>Activity: {name}</p>
                        <p>Dificulty: {dificulty}</p>
                        <p>Duration: {duration}</p>
                        <p>Season: {season}</p>
                    </> : ""
                }
            </div>
        </>
    )
}

export default ActivityDetail