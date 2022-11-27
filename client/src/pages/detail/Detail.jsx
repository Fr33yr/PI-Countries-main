import {useParams} from 'react-router-dom'

export default function Detail() {
    const params = useParams()

    return (
        <>
            <h1>Country: {params.id}</h1>
        </>
    )
}
