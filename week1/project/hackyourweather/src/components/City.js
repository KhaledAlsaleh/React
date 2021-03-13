import React from 'react';

const City = ({cityName,countryName,weatherMain,weatherDescription,
                minTemperature,maxTemperature,longitude,latitude}) => {
    return (
        <div className='city'>
            <h1>{cityName}, {countryName}</h1>
            <h2>{weatherMain}</h2>
            <h3>{weatherDescription}</h3>
            <p>min temp:    {minTemperature}</p>
            <p>max temp:    {maxTemperature}</p>
            <p>location:    {latitude}, {longitude}</p>
        </div>
    );
};

export default City;
