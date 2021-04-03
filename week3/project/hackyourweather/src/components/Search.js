import { useState, useEffect, useRef } from 'react';
import useFetch from './useFetch';
import City from './City';

const Search = () => {
  const [cityName, setCityName] = useState('');
  const [submit, setSubmit] = useState(false);
  const refContainer = useRef(null);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`;
  const {
    isLoading,
    hasError,
    cityNotFound,
    cityList,
    cityExist,
    setCityList,
    setCityNotFound,
    setCityExist,
    fetchWeatherInformation,
  } = useFetch(url);

  const deleteCity = (cityID) => {
    setCityList(cityList.filter((city) => city.id !== cityID));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmit(!submit);
  };

  useEffect(() => {
    if (cityName) {
      fetchWeatherInformation();
    }
  }, [submit]);

  useEffect(() => {
    refContainer.current.focus();
  });

  return (
    <div className='search'>
      <h1 className='headerCityPage'>Weather App</h1>
      <form onSubmit={onSubmit}>
        <input
          className='searchInput'
          type='text'
          placeholder='Search City'
          value={cityName}
          ref={refContainer}
          onChange={(e) => {
            setCityName(e.target.value);
            setCityNotFound(false);
            setCityExist(false);
          }}
        />
        <button
          className='searchSubmit'
          type='submit'
          disabled={!cityName && true}
        >
          Search
        </button>
      </form>
      {isLoading && <p className='loading'>Loading....</p>}
      {hasError && <p className='error'>Something Went Wrong!</p>}
      {cityExist && (
        <p className='error'>
          You Have Already Searched For This City, You Can Find It In Search
          History
        </p>
      )}
      {cityName && cityNotFound && (
        <p className='error'>
          City Name Not Found, Please Enter Correct City Name!
        </p>
      )}
      {cityList.map((city) => (
        <City
          city={city}
          key={city.id}
          deleteHandler={() => deleteCity(city.id)}
        />
      ))}
    </div>
  );
};

export default Search;
