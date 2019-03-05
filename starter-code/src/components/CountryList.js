import React from "react";
import countriesJson from "../countries.json"
import { Link  } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';

const countryList = () => {

    const countriesList = countriesJson;
    
    return(
        <div className="list-group">
            <nav className="navbar navbar-dark bg-primary sticky-top">
            <span className="navbar-text">
                <Link to="/">WikiCountries</Link>
            </span>
            </nav>
            {
                countriesList.map((eachCountry, index) => {
                    return(
                        <div key={index} className="col-5" style={{ maxHeight: '90vh'}}>
                            <Link to={`/countryList/${eachCountry.cca3}`} className="list-group-item list-group-item-action">{eachCountry.flag}{eachCountry.name.official}</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default countryList