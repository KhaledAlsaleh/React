import React from 'react';
import City from './City';
import cities from '../json/city-weather.json';
const CityList = () => {
    return (
        <div className='cityList'>
            <h1 id='headerCityPage'>Weather</h1>
            {cities.map(city => <City key={city.weather[0].id} 
                                      cityName={city.name} 
                                      countryName={city.sys.country}
                                      weatherMain={city.weather[0].main}
                                      weatherDescription={city.weather[0].description}
                                      minTemperature={city.main.temp_min}
                                      maxTemperature={city.main.temp_max}
                                      latitude={city.coord.lat}
                                      longitude={city.coord.lon}/>)}
        </div>
    );
};

export default CityList;

