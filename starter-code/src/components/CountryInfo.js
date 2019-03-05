import React from 'react';
import countriesJson from "../countries.json"
import { Link } from "react-router-dom"

const countryInfo = (props) => {


    const getCountry = (cca3) => {
        return(
            countriesJson.find(oneCountry => {
                return oneCountry.cca3 === cca3
            })
        )
      };
      
      const { params } = props.match;
      const foundCountry = getCountry(params.countrycca3);
       
      return (
        <div className="info-container">
          <h1>Name: { foundCountry.name.common } </h1>
          <h2>Capital: { foundCountry.capital}</h2>
          <h2>Area: { foundCountry.area} km2</h2>
          <h2>Borders:  </h2>
              <ul>
                {
                    foundCountry.borders.map((borders, index)=>{
                    return (
                    <li className="list-group-item" key={index}>
                      <Link to={`/countryList/${borders}`}>
                        {`${borders}`}
                      </Link>
                    </li>
                    )
                })}               
              </ul>

         
        </div>
      )
}

export default countryInfo