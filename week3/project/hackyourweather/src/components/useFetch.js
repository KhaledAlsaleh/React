import { useState } from 'react';

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [cityNotFound, setCityNotFound] = useState(false);
  const [cityList, setCityList] = useState([]);
  const [cityExist, setCityExist] = useState(false);

  const fetchWeatherInformation = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
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
        setCityNotFound(false);
      } else {
        setCityExist(false);
        setHasError(false);
        setCityNotFound(true);
      }
    } catch {
      setCityNotFound(false);
      setHasError(true);
      setCityExist(false);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    hasError,
    cityNotFound,
    cityList,
    cityExist,
    setCityList,
    setCityNotFound,
    fetchWeatherInformation,
  };
};

export default useFetch;
