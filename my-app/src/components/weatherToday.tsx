import './styles/weatherTodayStyle.css'
import { weatherContextProvider } from '@/context';
import { useContext } from 'react';
import Image from 'next/image';
import { formatDate } from '@/functions/dateFormatFunctions.tsx';
import { temperatureToggle } from '@/functions/temperatureFunctions';

export default function WeatherToday() {
  const weatherData = useContext(weatherContextProvider).weatherData;
  const { tempCelsius, temperatureUnits } = useContext(weatherContextProvider);

  if (!weatherData) {
    return null;
  }

  const weatherToday = weatherData.forecast.forecastday[0];
  const date = formatDate(weatherToday.date);

  const handleOnClick = () => {
    temperatureUnits(tempCelsius);
  };

  const temperature = temperatureToggle({
    tempCelsius: tempCelsius,
    temperature: weatherToday.day.avgtemp_c,
  });

  return (
    <>
      <div className="todayForecastContainer">
        <section id="locationAndTempUnisContainer">
          <div className="locationInfo">
            {`Results for: ${weatherData.location.name}, ${weatherData.location.country}`}
          </div>
          <div className="tempUnitsToggle">
            <button
              onClick={handleOnClick}
              className={tempCelsius ? 'tempUnitsToggle lightColor' : 'tempUnitsToggle'}
            >
              Farenheign
            </button>
            <span className="verticalLine tempUnitsToggle"></span>
            <button
              onClick={handleOnClick}
              className={!tempCelsius ? 'tempUnitsToggle lightColor' : 'tempUnitsToggle'}
            >
              Celcius
            </button>
          </div>
        </section>
        <section id='weatherInfoContainer'>
          <div className="gridContainer">
            <Image
              className="weatherIcon"
              src={`http:${weatherToday.day.condition.icon}`}
              aria-label={`http${weatherToday.day.condition.text} icon`}
              alt="Weather icon"
              width={200}
              height={200}
              priority={true}
            />
            <div className="weatherTemp">
              {temperature} {tempCelsius ? 'ºC' : 'ºF'}
            </div>

            <span className="verticalLine"></span>

            <div className='weatherInfo'>
              <div className="weatherDetails">
                <div>Precipitation: {weatherToday.day.daily_chance_of_rain}%</div>
                <div>Wind Speed: {weatherToday.day.avgvis_miles}mph/h</div>
                <div>Humidity: {weatherToday.day.avghumidity}%</div>
              </div>
              <div className="timeAndDescription">
                <div>{date}</div>
                <div>{weatherToday.day.condition.text}</div>
              </div>
            </div>
          </div>
        </section>
      </div >
    </>
  );
}
