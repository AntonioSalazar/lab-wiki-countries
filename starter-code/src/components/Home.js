import React from "react";
import { Link } from "react-router-dom"

const home = () => {
    return(
        <div>
            <h1>
                Hey! You wanna know a little bit more about a country?
            </h1>
            <h2>Take a look to <Link to="/countryList">WikiCountries</Link></h2>
        </div>
    )
}

export default home;