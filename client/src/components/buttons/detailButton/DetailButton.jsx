import {Link} from 'react-router-dom'
import styles from './detailbutton.module.css'

function DetailButton({id}) {
    
    return (
        <>
            <Link to={`/country/${id}`}/>
        </>
    )
}

export default DetailButton