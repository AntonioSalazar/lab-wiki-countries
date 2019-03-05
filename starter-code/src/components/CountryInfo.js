import React from 'react';
import countriesJson from "../countries.json"
import { Link } from "react-router-dom"

const countryInfo = (props) => {



    return(
        <div className="info-container">
            <span>Hey</span>
            {
                console.log(props)
            }
        </div>
    )
}

export default countryInfo