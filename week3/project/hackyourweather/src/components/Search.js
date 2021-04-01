import { useState, useEffect, useRef } from 'react';
import City from './City';

const Search = () => {
  const [cityName, setCityName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [invalidRequest, setInvalidRequest] = useState(false);
  const [cityList, setCityList] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [cityExist, setCityExist] = useState(false);

  const refContainer = useRef(null);

  const fetchWeatherInformation = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`
      );
      if (response.ok) {
        const newCity = await response.json();
        setCityList((cityList) => {
          // I don't want search for a city twice or more
          if (cityList.some((city) => city.id === newCity.id)) {
            setCityExist(true);
            return [...cityList];
          } else {
            setCityExist(false);
            return [newCity, ...cityList];
          }
        });
        setHasError(false);
        setInvalidRequest(false);
      } else {
        setCityExist(false);
        setHasError(false);
        setInvalidRequest(true);
      }
    } catch {
      setInvalidRequest(false);
      setHasError(true);
      setCityExist(false);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteCity = (cityID) => {
    setCityList(cityList.filter((city) => city.id !== cityID));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmit(!submit);
  };

  useEffect(() => {
    fetchWeatherInformation();
  }, [submit]);

  useEffect(() => {
    refContainer.current.focus();
  });

  return (
    <div className='search'>
      <h1 id='headerCityPage'>Weather App</h1>
      <form onSubmit={onSubmit}>
        <input
          className='searchInput'
          type='text'
          placeholder='Search City'
          value={cityName}
          ref={refContainer}
          onChange={(e) => {
            setCityName(e.target.value);
            setInvalidRequest(false);
          }}
        />
        <input
          className='searchSubmit'
          type='submit'
          value='Search'
          disabled={!cityName && true}
        />
      </form>
      {!hasError && !invalidRequest && isLoading && (
        <p id='loading'>Loading....</p>
      )}
      {hasError && <p id='error'>Something Went Wrong!</p>}
      {cityExist && (
        <p id='error'>
          You Have Already Searched For This City, You Can Find It In Search
          History
        </p>
      )}
      {cityName && invalidRequest && (
        <p id='error'>City Name Not Found, Please Enter Correct City Name!</p>
      )}
      {cityList &&
        cityList.map((city) => (
          <City
            props={city}
            key={city.id}
            deleteHandler={() => deleteCity(city.id)}
          />
        ))}
    </div>
  );
};

export default Search;
