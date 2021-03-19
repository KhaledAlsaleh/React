const City = ({ props }) => {
  return (
    <div className='cityWeather'>
      <div className='city'>
        <h1>
          {props.name}, {props.sys.country}
        </h1>
        <h2>{props.weather[0].main}</h2>
        <h3>{props.weather[0].description}</h3>
        <p>min temp: {props.main.temp_min}</p>
        <p>max temp: {props.main.temp_max}</p>
        <p>
          location: {props.coord.lat}, {props.coord.lon}
        </p>
      </div>
      <img
        className='weatherImage'
        src={`https://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`}
        alt='weatherImage'
      />
    </div>
  );
};

export default City;
