import React from "react";
import countriesJson from "../countries.json"
import { Link  } from "react-router-dom"
import CountryInfo from './CountryInfo';
import 'bootstrap/dist/css/bootstrap.css';

const countryList = () => {

    const countriesList = countriesJson;
    
    return(
        <div className="list-group">
            <nav className="navbar navbar-dark bg-primary sticky-top">
            <span className="navbar-text">
                <Link to="/">WikiCountries</Link>
                <br/>
                <Link to="/">Todo este texto tonto y sin sentido en realidad si hace algo, te regresa a home</Link>
            </span>
            </nav>
            {
                countriesList.map((eachCountry, index) => {
                    return(
                        <div key={index} className="col-5" style={{ maxHeight: '90vh'}}>
                            <Link to={`/countryList/${eachCountry.name.official}`} className="list-group-item list-group-item-action">{eachCountry.name.official}</Link>
                        </div>
                    )
                })
            }
            <CountryInfo />
        </div>
    )
}

export default countryList