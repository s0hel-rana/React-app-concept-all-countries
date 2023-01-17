import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, capital, population, flags, region} = props.country;
    return (
        <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <img src={flags.png} alt="" />
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;