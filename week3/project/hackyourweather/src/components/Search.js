import { useState, useEffect } from 'react';
import City from './City';

const Search = () => {
  const [cityName, setCityName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [invalidRequest, setInvalidRequest] = useState(false);
  const [emptyCityName, setEmptyCityName] = useState(false);
  const [cityList, setCityList] = useState([]);
  const [submit, setSubmit] = useState(false);

  const fetchWeatherInformation = async () => {
    if (cityName) {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`
        );
        if (response.ok) {
          const newCity = await response.json();
          setCityList((cityList) => {
            if (cityList.some((city) => city.id === newCity.id))
              return [...cityList];
            else {
              return [newCity, ...cityList];
            }
          });
          setIsLoading(false);
          setHasError(false);
          setEmptyCityName(false);
          setInvalidRequest(false);
        } else {
          setHasError(false);
          setEmptyCityName(false);
          setInvalidRequest(true);
          setIsLoading(false);
        }
      } catch {
        setEmptyCityName(false);
        setInvalidRequest(false);
        setHasError(true);
        setIsLoading(false);
      }
    } else {
      setEmptyCityName(true);
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

  return (
    <div className='search'>
      <h1 id='headerCityPage'>Weather App</h1>
      <form onSubmit={onSubmit}>
        <input
          className='searchInput'
          type='text'
          placeholder='Search City'
          value={cityName}
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
      {invalidRequest && (
        <p id='error'>City Name Not Found, Please Enter Correct City Name!</p>
      )}
      {emptyCityName && <p id='error'>Please Enter City Name!</p>}
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
