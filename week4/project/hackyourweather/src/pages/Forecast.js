import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../components/useFetch';
import Chart from '../components/Chart';

const Forecast = () => {
  const { cityName } = useParams();
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`;
  const {
    isLoading,
    hasError,
    forecastData,
    fetchForecastInformation,
  } = useFetch(url);

  useEffect(() => {
    fetchForecastInformation();
  }, []);

  return (
    <section>
      {isLoading && !hasError && <p className='loading'>Loading....</p>}
      {hasError && !isLoading && <p className='error'>Something Went Wrong!</p>}
      {forecastData && <Chart chartData={forecastData} />}
    </section>
  );
};

export default Forecast;
