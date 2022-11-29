import styles from './home.module.css'
import { Link } from 'react-router-dom'

export default function Home() {

  return (
    <>
      <div className={styles.homecontainer}>
        <Link to={'/countries'} className={styles.homelink}>Countries</Link>
      </div>
    </>
  )
}
