import React from 'react'
import { useEffect } from 'react'
import {useSelector} from 'react-redux'

import {fetchCountries} from '../../redux/actions'

export default function Home() {

  const countries = useSelector(state => state.countries)

  useEffect(()=>{
    fetchCountries()
  },[])

  countries && console.log(countries);

  return (
    <>
      <h1>Home</h1>
    </>
  )
}
