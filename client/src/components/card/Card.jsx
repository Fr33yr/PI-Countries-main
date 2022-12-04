import React from 'react'
import styles from './card.module.css'

export default function Card(props) {
    const {name, images, continent} = props
    const flag = images[1]
  return (
    <>
        <div className={styles.card}>
          <img src={flag} alt={`${name}-flag`} />
          <h3>{name}</h3>
          <h4>{continent}</h4>
        </div>
    </>
  )
}
