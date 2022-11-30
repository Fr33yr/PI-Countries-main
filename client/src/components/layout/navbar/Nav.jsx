import { Link } from 'react-router-dom'
import styles from './navbar.module.css'


export default function Nav() {
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to={'/activity'}>Crear actividad</Link>
          </li>
          <li>
            <Link to={'/countries'}>Home</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
