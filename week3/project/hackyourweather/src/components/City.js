import { FaTimes } from 'react-icons/fa';

const City = ({ props, deleteHandler }) => {
  return (
    <div className='cityWeather'>
      <div className='city'>
        <h1>
          {props.name} - {props.sys.country}
        </h1>
        <h2>
          {props.weather[0].main} - {props.weather[0].description}
        </h2>
        <p>min temp: {props.main.temp_min} °C</p>
        <p>max temp: {props.main.temp_max} °C</p>
        <p>
          location: {props.coord.lat}, {props.coord.lon}
        </p>
      </div>
      <img
        className='weatherImage'
        src={`https://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`}
        alt='weatherImage'
      />
      <FaTimes className='icon' onClick={() => deleteHandler(props.id)} />
    </div>
  );
};

export default City;
