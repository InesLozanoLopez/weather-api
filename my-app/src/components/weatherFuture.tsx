import './styles/weatherFutureStyle.css';
import { weatherContextProvider } from './../context';
import { useContext } from 'react';
import { IWeatherDay } from './../interfaces';
import FutureDay from './../components/futureDay';

export default function WeatherFuture() {
  const weatherContextData = useContext(weatherContextProvider);
  const weatherData = weatherContextData.weatherData;

  if (!weatherData) {
    return null;
  }

  const weatherForecast = weatherData.forecast.forecastday;

  return (
    <>
      {weatherData && (
        <div className="futureGridContainer">
          {weatherForecast.slice(1).map((weatherDay: IWeatherDay) => (
            <div key={weatherDay.date}>
              <FutureDay weatherDay={weatherDay} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
