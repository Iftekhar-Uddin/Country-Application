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
        <div className="ele">
          <div className="flagsec">
            <img src={flags.png} alt={name.common} className="flag"/>
          </div>
          <div className="restsec">
            <h2>Name: {name.common}</h2>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <p>Area: {area} Squr.Km</p>
            <button className="btn" onClick={()=> {handleRemoveCountry(name.common)}} >Remove</button>
          </div>

        </div>
    </article>
  )
}

export default Country