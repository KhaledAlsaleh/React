import { useState } from 'react';
import City from './City';

const Search = () => {
  const [cityName, setCityName] = useState('');
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [invalidRequest, setInvalidRequest] = useState(false);

  const fetchWeatherInformation = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`
      );
      if (response.ok) {
        const data = await response.json();
        setData(data);
        setLoading(false);
        setHasError(false);
        setInvalidRequest(false);
      } else {
        setHasError(false);
        setData();
        setInvalidRequest(true);
        setLoading(false);
      }
    } catch {
      setData();
      setInvalidRequest(false);
      setHasError(true);
      setLoading(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetchWeatherInformation();
  };

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
            setData();
            setInvalidRequest(false);
          }}
        />
        <input className='searchSubmit' type='submit' value='Search' />
      </form>

      {!hasError && !invalidRequest && isLoading && (
        <p id='loading'>Loading....</p>
      )}
      {cityName && data && <City props={data} />}
      {hasError && <p id='error'>Something Went Wrong!</p>}
      {invalidRequest && <p id='error'>Please Enter Correct City Name!</p>}
    </div>
  );
};

export default Search;
