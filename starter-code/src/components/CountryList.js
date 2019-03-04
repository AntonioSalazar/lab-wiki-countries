import React from "react";
import countriesJson from "../countries.json"
import { Link  } from "react-router-dom"

const countryList = () => {

    const countriesList = countriesJson;
    
    console.log(countriesList);
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
                            <a href="" className="list-group-item list-group-item-action">{eachCountry.name.official}</a>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default countryList