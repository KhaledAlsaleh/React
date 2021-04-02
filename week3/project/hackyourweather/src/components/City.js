import { FaTimes } from 'react-icons/fa';

const City = ({ props, deleteHandler }) => {
  const { name, sys, weather, main, coord, id } = props;
  return (
    <div className='cityWeather'>
      <div className='city'>
        <h1>
          {name} - {sys.country}
        </h1>
        <h2>
          {weather[0].main} - {weather[0].description}
        </h2>
        <p>min temp: {main.temp_min} °C</p>
        <p>max temp: {main.temp_max} °C</p>
        <p>
          location: {coord.lat}, {coord.lon}
        </p>
      </div>
      <img
        className='weatherImage'
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt='weatherImage'
      />
      <FaTimes className='icon' onClick={() => deleteHandler(id)} />
    </div>
  );
};

export default City;
