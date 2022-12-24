import styles from './card.module.css'
import { DetailButton } from '../index'

export default function Card(props) {
  const { name, images, continent, id } = props
  const flag = images[1]
  return (
    <>
      <div className={styles.card}>
        <img src={flag} alt={`${name}-flag`} />
        <h3>{name}</h3>
        <h4>{continent}</h4>
        <DetailButton id={id}/>
      </div>
    </>
  )
}
