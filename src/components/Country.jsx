import "./country.css"
import React from 'react'


const Country = (props) => {
  const {name, flags, capital, population, area, currencies, languages, timezones, maps} = props.country
  console.log(props.country)
  // console.log(languages)
    
  const handleRemoveCountry = (name) => {
     props.takeDataFromCountry(name)
  }

  return (
    <article className="country">
        <div>
            <img src={flags.png} alt={name.common} className="flag"/>
            <h3>Name: {name.common}</h3>
            <h3>Capital: {capital}</h3>
            <h3>Population: {population}</h3>
            <h3>Area: {area} Squr.Km</h3>
            <button className="btn" onClick={()=> {handleRemoveCountry(name.common)}} >Remove</button>
        </div>
    </article>
  )
}

export default Country