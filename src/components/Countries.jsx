import "./countries.css"
import React from 'react'
import Country from "./Country"
import { v4 as uuidv4 } from 'uuid'


const Countries = (props) => {

 return (
    <section className="countries">
      {props.sendData.map((country) => {
        const NewCountry = {country, id: uuidv4()}
        return <Country {...NewCountry} key={NewCountry.id} takeDataFromCountry={props.takeDataFromCountries}/>
      })}
    </section>
  )
}

export default Countries
